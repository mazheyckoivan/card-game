import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { CARD_FRONT_IMAGES } from "../../../constants/cardImages";
import { ICard } from "../../interfaces/Card.interface";

import { IContextValues } from "./GameManager.interfaces";

interface Props {
  children: ReactNode;
}

const GameContext = createContext<IContextValues | undefined>(undefined);

const GameContextWrapper: FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);

  const shuffleCards = useCallback(() => {
    const shuffledCards: ICard[] = [...CARD_FRONT_IMAGES, ...CARD_FRONT_IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card: ICard) => ({ ...card, id: Math.random(), matched: false }));

    return shuffledCards;
  }, []);

  const restart = useCallback(() => {
    setCards(shuffleCards());
    setTurns(0);
  }, [shuffleCards]);

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
      value={{ cards, turns, firstCard, secondCard, restart, handleCardClick }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextWrapper;
export { GameContext };
