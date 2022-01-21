import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { GRID_SIZE_CARDS_AMOUNT } from "../../../constants/gameSettings";
import { useAppSelector } from "../../../store/hooks";
import { ICard } from "../../interfaces/Card.interface";

import { IContextValues } from "./GameManager.interfaces";

interface Props {
  children: ReactNode;
}

const GameContext = createContext<IContextValues | undefined>(undefined);

const GameContextWrapper: FC<Props> = ({ children }) => {
  const gridSize = useAppSelector((state) => state.settings.gridSize);

  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);

  const countUp = useCallback(() => {
    setTimeSpent((timeSpent) => timeSpent + 1);
  }, []);

  const startTimer = useCallback(() => {
    setTimeSpent(0);
    setInterval(countUp, 1000);
  }, [countUp]);

  const prepareCardGameImages = useCallback(() => {
    const imageSources = Array.from(Array(36).keys())
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
    setCards(shuffleCards());
    setTurns(0);
    startTimer();
  }, [shuffleCards, startTimer]);

  const resetTurn = useCallback(() => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns((turns) => turns + 1);
  }, []);

  const handleCardClick = useCallback(
    (card) => {
      firstCard ? setSecondCard(card) : setFirstCard(card);
    },
    [firstCard]
  );

  // check if cards matched or no and resetting turn
  useEffect(() => {
    if (firstCard && secondCard) {
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

  // check for all cards opened
  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      console.log("WIN");
    }
  }, [cards]);

  return (
    <GameContext.Provider
      value={{
        cards,
        turns,
        firstCard,
        secondCard,
        timeSpent,
        restart,
        handleCardClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextWrapper;
export { GameContext };
