// --- COMPONENTES UI REUTILIZABLES ---

// Helper para convertir nombres de kebab-case a PascalCase (ej: arrow-right -> ArrowRight)
const toPascalCase = (str) => {
    if (!str) return "";
    return str.split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
};

/**
 * Componente Icon Seguro
 * En lugar de inyectar HTML, construimos el SVG usando React.
 * Esto evita el 100% de los conflictos con el DOM.
 */
// --- ICONOS SVG ROBUSTOS (Garantizado que se ven) ---
const ICONS = {
    'flag': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" x2="4" y1="22" y2="15" /></svg>,
    'hash': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="9" y2="9" /><line x1="4" x2="20" y1="15" y2="15" /><line x1="10" x2="8" y1="3" y2="21" /><line x1="16" x2="14" y1="3" y2="21" /></svg>,
    'user': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    'life-buoy': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="4.93" x2="9.17" y1="4.93" y2="9.17" /><line x1="14.83" x2="19.07" y1="14.83" y2="19.07" /><line x1="14.83" x2="19.07" y1="9.17" y2="4.93" /><line x1="14.83" x2="9.17" y1="19.07" y2="14.83" /></svg>,
    'award': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
    // Icono de volumen mejorado y simplificado para visibilidad
    'volume-2': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0-.29.27L6.16 7H3v10h3.16l3.55 3.48.29.27V3.23zm-3 5.3L9.63 6.2v11.6L7 15.5H5V8.5h2z" /></svg>,
    'sun': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>,
    'moon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>,
    'lightbulb': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>,
    'check': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    'x': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,
    'menu': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>,
    'chevron-right': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>,
    'arrow-left': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>,
    'arrow-right': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
    'rotate-ccw': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
};

const Icon = ({ name, size = 20, className = "" }) => {
    const iconSvg = ICONS[name] || ICONS['check'];
    return React.cloneElement(iconSvg, {
        width: size,
        height: size,
        className: className
    });
};

const TTSButton = ({ text, small = false }) => {
    const speak = (e) => {
        e.stopPropagation();
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.8;
        window.speechSynthesis.speak(u);
    };

    return (
        <button
            onClick={speak}
            className={`flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-110 transition-all shadow-sm ${small ? 'w-8 h-8' : 'w-12 h-12'}`}
            title="Escuchar"
        >
            <Icon name="volume-2" size={small ? 16 : 24} />
        </button>
    );
};

const ThemeToggle = ({ isDark, toggle }) => (
    <button onClick={toggle} className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
        <Icon name={isDark ? "sun" : "moon"} size={20} />
    </button>
);

const SlideContent = ({ data }) => {
    const [inputVal, setInputVal] = React.useState("");
    const [quizState, setQuizState] = React.useState({
        score: 0,
        finished: false,
        answers: {}, // { questionIndex: optionIndex }
        feedback: {} // { questionIndex: 'correct' | 'incorrect' }
    });

    React.useEffect(() => {
        // Reset states on new slide
        setQuizState({ score: 0, finished: false, answers: {}, feedback: {} });
        setInputVal("");
    }, [data]);

    if (!data) return null;

    if (data.type === "info") {
        return (
            <div className="text-center py-6 md:py-10 animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-600 dark:text-brand-500">{data.title}</h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-slate-600 dark:text-slate-300">{data.content}</p>
                {data.tip && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 p-4 rounded-xl inline-flex items-center gap-3 mx-4">
                        <span className="text-yellow-500"><Icon name="lightbulb" size={24} /></span>
                        <span className="text-yellow-800 dark:text-yellow-200 text-sm font-medium text-left">{data.tip}</span>
                    </div>
                )}
            </div>
        );
    }

    if (data.type === "grid") {
        return (
            <div className="animate-slide-up w-full">
                <h3 className="text-2xl font-bold mb-2 text-center dark:text-white">{data.title}</h3>
                <p className="text-center text-slate-500 dark:text-slate-400 mb-8">{data.instruction}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {data.items.map((item, idx) => (
                        <div key={idx}
                            onClick={() => {
                                const u = new SpeechSynthesisUtterance(item.de);
                                u.lang = 'de-DE';
                                window.speechSynthesis.speak(u);
                            }}
                            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 cursor-pointer card-hover flex flex-col items-center group transition-colors hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-slate-700"
                        >
                            <span className="text-3xl font-bold text-slate-800 dark:text-white group-hover:text-brand-600">{item.de}</span>
                            <span className="text-xs text-slate-400 mt-2 font-mono bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded">{item.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (data.type === "vocab" || data.type === "special") {
        return (
            <div className="max-w-3xl mx-auto animate-slide-up w-full">
                <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">{data.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-300 hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                {data.type === "special" && <span className="text-2xl font-bold text-brand-600">{item.char}</span>}
                                <div>
                                    <div className="text-lg font-bold text-slate-800 dark:text-white">{item.de || item.ex}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">{item.es || (item.sound ? `Sonido: ${item.sound}` : '')}</div>
                                </div>
                            </div>
                            <TTSButton text={item.de || item.ex.split('(')[0]} small />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (data.type === "verb" || data.type === "grammar_box") {
        return (
            <div className="max-w-2xl mx-auto animate-slide-up bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 w-full">
                <h3 className="text-2xl font-bold mb-6 text-center border-b border-slate-100 dark:border-slate-700 pb-4 dark:text-white">{data.title}</h3>

                {data.type === "verb" ? (
                    <div className="space-y-3">
                        {data.conjugation.map((row, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-lg font-medium text-slate-500 dark:text-slate-400 w-20">{row.p}</span>
                                    <span className="text-2xl font-bold text-brand-600 dark:text-brand-400">{row.v}</span>
                                </div>
                                <div className="flex items-center gap-3 justify-end flex-1">
                                    <span className="text-sm text-slate-400 italic text-right">"{row.ex}"</span>
                                    <TTSButton text={row.ex.split('(')[0]} small />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.content.map((row, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                <span className="font-bold text-slate-700 dark:text-slate-200">{row.l}</span>
                                <span className="text-slate-500 text-sm">{row.r}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    if (data.type === "input_practice") {
        return (
            <div className="max-w-lg mx-auto text-center animate-slide-up space-y-8 w-full">
                <h3 className="text-2xl font-bold dark:text-white">{data.title}</h3>
                <div className="relative group">
                    <input
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        placeholder={data.placeholder}
                        className="w-full p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-2xl text-center focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all dark:text-white"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity text-slate-300">
                        <Icon name="check" size={20} />
                    </div>
                </div>
                {inputVal && (
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800 animate-slide-up shadow-sm">
                        <div className="text-3xl font-bold text-slate-800 dark:text-white mb-4">"{data.prefix} <span className="text-green-600 dark:text-green-400 underline decoration-2 underline-offset-4">{inputVal}</span>"</div>
                        <div className="flex justify-center mb-4">
                            <TTSButton text={`${data.prefix} ${inputVal}`} />
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300 font-medium bg-white/50 dark:bg-black/20 py-2 px-4 rounded-full inline-block">{data.feedback}</p>
                    </div>
                )}
            </div>
        );
    }

    if (data.type === "dialogue") {
        return (
            <div className="max-w-lg mx-auto space-y-6 animate-slide-up w-full">
                <h3 className="text-center font-bold text-xl mb-6 dark:text-white">{data.title}</h3>
                {data.lines.map((line, i) => (
                    <div key={i} className={`flex gap-4 ${line.speaker === 'B' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 shadow-sm ${line.speaker === 'A' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                            {line.speaker}
                        </div>
                        <div className={`p-5 rounded-3xl max-w-[85%] shadow-sm relative group ${line.speaker === 'A' ? 'bg-white dark:bg-slate-800 rounded-tl-none border border-slate-200 dark:border-slate-700' : 'bg-brand-600 text-white rounded-tr-none'}`}>
                            <div className="font-bold mb-1 text-lg">{line.de}</div>
                            <div className={`text-sm ${line.speaker === 'A' ? 'text-slate-500 dark:text-slate-400' : 'text-blue-100'}`}>{line.es}</div>
                            <div className="absolute -right-3 -bottom-3 opacity-0 group-hover:opacity-100 transition-opacity scale-75">
                                <TTSButton text={line.de} small />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (data.type === "quiz") {
        const handleAnswer = (qIdx, optIdx) => {
            if (quizState.answers[qIdx] !== undefined) return; // Prevent changing answer

            const isCorrect = data.questions[qIdx].ans === optIdx;

            setQuizState(prev => ({
                ...prev,
                answers: { ...prev.answers, [qIdx]: optIdx },
                feedback: { ...prev.feedback, [qIdx]: isCorrect ? 'correct' : 'incorrect' }
            }));

            if (isCorrect && window.confetti) {
                window.confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 }, colors: ['#22c55e'] });
            }
        };

        const finishQuiz = () => {
            let score = 0;
            data.questions.forEach((q, i) => {
                if (quizState.answers[i] === q.ans) score++;
            });
            setQuizState(prev => ({ ...prev, score, finished: true }));
            if (score === data.questions.length && window.confetti) window.confetti();
        };

        return (
            <div className="max-w-2xl mx-auto animate-slide-up pb-10 w-full">
                <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">Prueba de Conocimiento</h3>

                {!quizState.finished ? (
                    <div className="space-y-8">
                        {data.questions.map((q, qIdx) => (
                            <div key={qIdx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
                                <p className="font-bold mb-4 dark:text-white text-lg flex items-start gap-3">
                                    <span className="bg-brand-100 text-brand-700 w-8 h-8 flex items-center justify-center rounded-full text-sm shrink-0">{qIdx + 1}</span>
                                    {q.q}
                                </p>
                                <div className="grid grid-cols-1 gap-3 pl-11">
                                    {q.options.map((opt, oIdx) => {
                                        const isSelected = quizState.answers[qIdx] === oIdx;
                                        const isCorrect = q.ans === oIdx;
                                        const showResult = quizState.answers[qIdx] !== undefined;

                                        let btnClass = "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700"; // default
                                        if (showResult) {
                                            if (isCorrect) btnClass = "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 ring-1 ring-green-500";
                                            else if (isSelected) btnClass = "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 ring-1 ring-red-500";
                                            else btnClass = "opacity-50 border-slate-200";
                                        }

                                        return (
                                            <button
                                                key={oIdx}
                                                onClick={() => handleAnswer(qIdx, oIdx)}
                                                disabled={showResult}
                                                className={`w-full text-left p-4 rounded-xl border transition-all font-medium flex justify-between items-center ${btnClass}`}
                                            >
                                                {opt}
                                                {showResult && isCorrect && <Icon name="check" size={18} className="text-green-600" />}
                                                {showResult && isSelected && !isCorrect && <Icon name="x" size={18} className="text-red-600" />}
                                            </button>
                                        );
                                    })}
                                </div>
                                {/* Feedback Message */}
                                {quizState.feedback[qIdx] === 'incorrect' && (
                                    <div className="mt-3 pl-11 text-red-600 text-sm font-semibold animate-fade-in">
                                        ¡Incorrecto! La respuesta correcta era: {q.options[q.ans]}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={finishQuiz}
                            disabled={Object.keys(quizState.answers).length < data.questions.length}
                            className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-brand-500/20 transition-all transform active:scale-95"
                        >
                            Ver Resultados Finales
                        </button>
                    </div>
                ) : (
                    <div className="text-center bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl animate-fade-in">
                        <div className="text-7xl mb-6 animate-bounce">{quizState.score === data.questions.length ? '🏆' : '📝'}</div>
                        <h2 className="text-4xl font-bold mb-3 dark:text-white">Tu Nota: {quizState.score} / {data.questions.length}</h2>
                        <div className="w-full bg-slate-100 rounded-full h-4 mb-6 overflow-hidden">
                            <div className="bg-brand-500 h-full transition-all duration-1000" style={{ width: `${(quizState.score / data.questions.length) * 100}%` }}></div>
                        </div>
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-8">
                            {quizState.score === data.questions.length ? "¡Perfecto! Has dominado este nivel." : "Buen intento. Revisa tus errores y prueba de nuevo."}
                        </p>
                        <button
                            onClick={() => { setQuizState({ score: 0, finished: false, answers: {}, feedback: {} }); }}
                            className="px-8 py-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                            Intentar de nuevo
                        </button>
                    </div>
                )}
            </div>
        );
    }

    return <div className="p-4 text-center text-slate-400">Cargando lección...</div>;
};

const App = () => {
    const courses = window.CourseData || [];

    const [currentLevelIdx, setCurrentLevelIdx] = React.useState(0);
    const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);
    const [showSummary, setShowSummary] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const currentLevel = courses[currentLevelIdx];
    const currentSlide = currentLevel ? currentLevel.lessons[currentSlideIdx] : null;

    React.useEffect(() => {
        if (darkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [darkMode]);

    if (!courses.length || !currentLevel) return (
        <div className="flex h-screen items-center justify-center bg-slate-50 text-slate-400">
            <div className="animate-pulse flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full mb-4"></div>
                Cargando curso...
            </div>
        </div>
    );

    const nextSlide = () => {
        if (currentSlideIdx < currentLevel.lessons.length - 1) {
            setCurrentSlideIdx(c => c + 1);
        } else {
            setShowSummary(true);
            if (window.confetti) window.confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        }
    };

    const prevSlide = () => {
        if (showSummary) setShowSummary(false);
        else if (currentSlideIdx > 0) setCurrentSlideIdx(c => c - 1);
    };

    const changeLevel = (idx) => {
        setCurrentLevelIdx(idx);
        setCurrentSlideIdx(0);
        setShowSummary(false);
        setSidebarOpen(false);
    };

    // Progress percentage calculation
    const progressPercent = showSummary ? 100 : Math.round(((currentSlideIdx + 1) / currentLevel.lessons.length) * 100);

    return (
        <div className={`flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans`}>
            {/* SIDEBAR */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 shadow-2xl md:shadow-none flex flex-col`}>
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 z-10">
                    <span className="font-bold text-2xl tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
                        <span className="bg-brand-600 text-white px-2 py-0.5 rounded-lg text-lg font-black shadow-brand-200 shadow-lg">A1</span> Deutsch
                    </span>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-slate-600"><Icon name="x" size={24} /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    {courses.map((level, idx) => (
                        <button
                            key={level.id}
                            onClick={() => changeLevel(idx)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all group border-2 ${currentLevelIdx === idx
                                    ? 'bg-white dark:bg-slate-800 border-brand-500 shadow-md ring-4 ring-brand-500/10'
                                    : 'bg-transparent border-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                                }`}
                        >
                            <div className={`p-3 rounded-xl transition-colors ${currentLevelIdx === idx ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-white'}`}>
                                <Icon name={level.icon} size={22} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className={`font-bold text-sm truncate ${currentLevelIdx === idx ? 'text-brand-900 dark:text-white' : ''}`}>{level.title}</div>
                                <div className="text-xs opacity-70 mt-1">{level.lessons.length} Lecciones</div>
                            </div>
                        </button>
                    ))}
                </div>
            </aside>

            {/* OVERLAY */}
            {sidebarOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>}

            {/* MAIN AREA */}
            <main className="flex-1 md:ml-80 flex flex-col h-full relative w-full bg-slate-50/50">
                {/* Header */}
                <header className="p-4 md:p-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center shadow-sm z-30 sticky top-0">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="md:hidden text-slate-700 dark:text-white"><Icon name="menu" size={24} /></button>
                        <div>
                            <h1 className="text-lg md:text-2xl font-bold text-slate-800 dark:text-white truncate max-w-[200px] md:max-w-none">{currentLevel.title}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="hidden md:flex flex-col items-end mr-4">
                            <span className="text-xs font-bold uppercase text-slate-400 mb-1 tracking-wider">Progreso {progressPercent}%</span>
                            <div className="w-40 h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-500 transition-all duration-500 ease-out rounded-full" style={{ width: `${progressPercent}%` }}></div>
                            </div>
                        </div>
                        <ThemeToggle isDark={darkMode} toggle={() => setDarkMode(!darkMode)} />
                    </div>
                </header>

                {/* Progress Bar Mobile */}
                <div className="md:hidden w-full h-1.5 bg-slate-200 dark:bg-slate-700">
                    <div className="h-full bg-brand-500 transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                    <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center pb-20">
                        {showSummary ? (
                            <div className="flex flex-col items-center justify-center text-center p-6 animate-slide-up bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 py-16">
                                <div className="bg-green-100 dark:bg-green-900/30 p-8 rounded-full mb-8 text-green-600 dark:text-green-400 ring-8 ring-green-50 dark:ring-green-900/10 shadow-lg animate-bounce">
                                    <Icon name="check" size={64} />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">¡Nivel Completado!</h2>
                                <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-lg text-lg leading-relaxed">
                                    ¡Excelente trabajo! Has completado todas las lecciones de <strong className="text-brand-600">"{currentLevel.title}"</strong>.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <button onClick={() => { setShowSummary(false); setCurrentSlideIdx(0); }} className="px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                                        <Icon name="rotate-ccw" size={20} /> Repasar
                                    </button>
                                    {currentLevelIdx < courses.length - 1 && (
                                        <button onClick={() => changeLevel(currentLevelIdx + 1)} className="px-8 py-4 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-500 shadow-xl shadow-brand-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                            Siguiente Nivel <Icon name="arrow-right" size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <SlideContent data={currentSlide} />
                        )}
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-4 md:px-8 py-4 flex justify-between items-center shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-20">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlideIdx === 0 && !showSummary}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                    >
                        <Icon name="arrow-left" size={20} />
                        <span className="hidden sm:inline">Anterior</span>
                    </button>

                    {!showSummary && (
                        <button
                            onClick={nextSlide}
                            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 dark:bg-brand-600 text-white font-bold hover:bg-slate-800 dark:hover:bg-brand-500 hover:-translate-y-0.5 transition-all shadow-xl shadow-slate-900/10 active:translate-y-0 active:scale-95"
                        >
                            {currentSlideIdx === currentLevel.lessons.length - 1 ? 'Terminar' : 'Continuar'}
                            <Icon name={currentSlideIdx === currentLevel.lessons.length - 1 ? "check" : "arrow-right"} size={20} />
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
