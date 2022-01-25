import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { ICard, IResult } from "interfaces";
import {
  getFormattedTimeFromSeconds,
  getLocalStorageItem,
  setLocalStorageItem,
} from "utils";
import { useAppSelector } from "store/hooks";
import {
  CARD_ASSETS_AMOUNT,
  GRID_SIZES_MAP,
  GRID_SIZE_CARDS_AMOUNT,
} from "constants/gameSettings";
import ROUTES from "constants/routes";

import { IContextValues } from "./GameManager.interfaces";

interface Props {
  children: ReactNode;
}

const GameContext = createContext<IContextValues | undefined>(undefined);

const GameContextWrapper: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const gridSize = useAppSelector((state) => state.settings.gridSize);
  const user = useAppSelector((state) => state.user);

  const [finished, setFinished] = useState(false);
  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const timerRef = useRef<any>(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(
      () => setTimeSpent((timeSpent) => timeSpent + 1),
      1000
    );
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(timerRef.current);
  }, []);

  const toggleTimer = useCallback(() => {
    stopTimer();
    setTimeSpent(0);
    startTimer();
  }, [startTimer, stopTimer]);

  const prepareCardGameImages = useCallback(() => {
    const imageSources = Array.from(Array(CARD_ASSETS_AMOUNT).keys())
      .sort(() => Math.random() - 0.5)
      .slice(0, GRID_SIZE_CARDS_AMOUNT[gridSize])
      .map((imageIndex: number) => `images/fronts/${imageIndex + 1}.png`);

    return imageSources;
  }, [gridSize]);

  const shuffleCards = useCallback(() => {
    const imageSources = prepareCardGameImages();

    const shuffledCards: ICard[] = [...imageSources, ...imageSources]
      .sort(() => Math.random() - 0.5)
      .map((imageSource: string) => ({
        src: imageSource,
        id: Math.random(),
        matched: false,
      }));

    return shuffledCards;
  }, [prepareCardGameImages]);

  const restart = useCallback(() => {
    setFinished(false);
    setCards(shuffleCards());
    setTurns(0);
    toggleTimer();
  }, [shuffleCards, toggleTimer]);

  const resetTurn = useCallback(() => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns((turns) => turns + 1);
    setDisabled(false);
  }, []);

  const handleCardClick = useCallback(
    (card) => {
      if (!disabled) {
        firstCard ? setSecondCard(card) : setFirstCard(card);
      }
    },
    [disabled, firstCard]
  );

  const saveResult = useCallback(() => {
    const newResult: IResult = {
      firstName: user.firstName || "N/A",
      secondName: user.secondName || "N/A",
      email: user.email || "N/A",
      turns: turns,
      time: getFormattedTimeFromSeconds(timeSpent),
      difficult: GRID_SIZES_MAP.get(gridSize) || "N/A",
    };

    const oldResults = getLocalStorageItem("results");

    oldResults
      ? setLocalStorageItem("results", [...oldResults, newResult])
      : setLocalStorageItem("results", [newResult]);
  }, [gridSize, timeSpent, turns, user.email, user.firstName, user.secondName]);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === firstCard.src) return { ...card, matched: true };

            return card;
          })
        );

        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [firstCard, secondCard, resetTurn]);

  useEffect(() => {
    if (!finished && cards.length && cards.every((card) => card.matched)) {
      setFinished(true);
      stopTimer();
      saveResult();
      navigate(ROUTES.summary, { state: { timeSpent, turns } });
    }
  }, [cards, finished, navigate, saveResult, stopTimer, timeSpent, turns]);

  return (
    <GameContext.Provider
      value={{
        cards,
        turns,
        firstCard,
        secondCard,
        timeSpent,
        finished,
        restart,
        stopTimer,
        handleCardClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextWrapper;
export { GameContext };
