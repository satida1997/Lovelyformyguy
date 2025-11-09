import React, { useState } from 'react';
import Header from './components/Header';
import PhonicsQuiz from './components/PhonicsQuiz';
import PhonicsRules from './components/PhonicsRules';

const App: React.FC = () => {
  const [view, setView] = useState<'rules' | 'quiz'>('rules');

  return (
    <div className="min-h-screen bg-repeat bg-center p-4 sm:p-6 md:p-8" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}>
      <div className="max-w-3xl mx-auto">
        <Header />

        <main className="mt-8">
          {view === 'rules' ? (
            <PhonicsRules onStartQuiz={() => setView('quiz')} />
          ) : (
            <PhonicsQuiz onBackToRules={() => setView('rules')} />
          )}
        </main>

        <footer className="text-center mt-12 pb-4">
          <p className="text-gray-500">Built with fun by a world-class senior frontend React engineer.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
