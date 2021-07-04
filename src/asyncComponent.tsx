import { lazy } from 'react';

const Home = lazy(() => import('./features/home/container/home'));
const Board = lazy(() => import('./features/board/container/board'));
const GameBoard = lazy(() => import('./features/game/container/game'));

export {
    Home,
    Board,
    GameBoard
}