
import React, { useState, useMemo } from 'react';
import { quizData } from '../data/quizData';
import CtaButton from './CtaButton';

interface PhonicsQuizProps {
  onBackToRules: () => void;
}

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const PhonicsQuiz: React.FC<PhonicsQuizProps> = ({ onBackToRules }) => {
    const [questions, setQuestions] = useState(shuffleArray(quizData));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [quizState, setQuizState] = useState<'quiz' | 'results'>('quiz');

    const handleAnswer = (answer: string) => {
        if (selectedAnswer) return; // Prevent multiple answers

        const correct = answer === questions[currentQuestionIndex].answer;
        setSelectedAnswer(answer);
        setIsCorrect(correct);
        if (correct) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setQuizState('results');
            }
        }, 1200);
    };

    const restartQuiz = () => {
        setQuestions(shuffleArray(quizData));
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setQuizState('quiz');
    };
    
    const getButtonClass = (option: string) => {
        if (!selectedAnswer) {
            return 'bg-white hover:bg-yellow-100';
        }
        if (option === questions[currentQuestionIndex].answer) {
            return 'bg-green-300 animate-pulse';
        }
        if (option === selectedAnswer) {
            return 'bg-red-300';
        }
        return 'bg-white opacity-60';
    };

    if (quizState === 'results') {
        return (
            <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#1F2937] text-center">
                <h2 className="font-fredoka text-4xl mb-4">Quiz Complete!</h2>
                <p className="text-2xl font-semibold text-gray-800 mb-6">
                    You scored <span className="font-fredoka text-3xl text-[#FF7E5F]">{score}</span> out of {questions.length}!
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <CtaButton onClick={restartQuiz} type="button">
                        Play Again
                    </CtaButton>
                     <button onClick={onBackToRules} className="font-semibold text-gray-600 hover:underline bg-gray-200 px-6 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_#6B7280] transform hover:-translate-y-0.5 transition-all">
                        Back to Rules
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const options = useMemo(() => shuffleArray(currentQuestion.options), [currentQuestion]);

    return (
        <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#1F2937]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-fredoka text-2xl">Phonics Quiz</h2>
                <p className="font-bold text-lg">{currentQuestionIndex + 1} / {questions.length}</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 border-2 border-black mb-8">
                <div 
                    className="bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] h-full rounded-full transition-all duration-300" 
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
            </div>
            
            <div className="text-center mb-8">
                <p className="text-xl text-gray-700 mb-2">How do you pronounce this word?</p>
                <p className="font-fredoka text-6xl text-black bg-white inline-block px-6 py-2 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#6B7280]">
                    {currentQuestion.word}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={!!selectedAnswer}
                        className={`w-full text-center font-bold text-xl p-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#1F2937] transition-all duration-300 transform active:translate-y-0 active:shadow-[2px_2px_0px_#1F2937] ${getButtonClass(option)} ${!selectedAnswer ? 'hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1F2937]' : ''}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PhonicsQuiz;
