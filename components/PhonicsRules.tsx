import React from 'react';
import { rulesData } from '../data/quizData';
import CtaButton from './CtaButton';

interface PhonicsRulesProps {
    onStartQuiz: () => void;
}

const PhonicsRules: React.FC<PhonicsRulesProps> = ({ onStartQuiz }) => {
    return (
        <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#1F2937]">
            <h2 className="font-fredoka text-3xl text-center mb-6 text-gray-800">Welcome to the Phonics Hub!</h2>
            <p className="text-center text-lg text-gray-700 mb-8">Learn the rules of English pronunciation, then test your knowledge with a quiz.</p>

            {rulesData.map((rule, index) => (
                <div key={index} className="border-4 border-black rounded-2xl mb-6 shadow-[4px_4px_0px_#6B7280] bg-white p-4">
                    <h3 className="font-fredoka text-xl text-left mb-3">{rule.title}</h3>
                    <div className="border-t-4 border-dashed border-gray-300 pt-3">
                        <div dangerouslySetInnerHTML={{ __html: rule.content }} className="prose max-w-none text-gray-700" />
                    </div>
                </div>
            ))}

            <div className="text-center mt-10">
                <CtaButton onClick={onStartQuiz} type="button">
                    Start 50 Question Quiz!
                </CtaButton>
            </div>
        </div>
    );
};

export default PhonicsRules;
