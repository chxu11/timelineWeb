import React, { useState, useEffect } from 'react';
import './styles.css';

// 题库
const questionBank = [
  {
    question: '鸦片战争爆发的根本原因是什么？',
    options: ['英国企图打开中国市场', '林则徐虎门销烟', '清政府闭关锁国', '中英贸易争端'],
    answer: 0,
    periodId: 'period1',
    eventTitle: '鸦片战争'
  },
  {
    question: '《南京条约》签订的时间是？',
    options: ['1840年', '1842年', '1856年', '1860年'],
    answer: 1,
    periodId: 'period1',
    eventTitle: '《南京条约》'
  },
  {
    question: '太平天国运动开始的标志是？',
    options: ['金田起义', '永安建制', '定都天京', '北伐西征'],
    answer: 0,
    periodId: 'period1',
    eventTitle: '太平天国运动'
  },
  {
    question: '第二次鸦片战争中，英法联军火烧圆明园发生在哪一年？',
    options: ['1840年', '1856年', '1860年', '1895年'],
    answer: 2,
    periodId: 'period1',
    eventTitle: '第二次鸦片战争'
  },
  {
    question: '洋务运动的口号是？',
    options: ['自强、求富', '民主、科学', '扶清灭洋', '变法图强'],
    answer: 0,
    periodId: 'period2',
    eventTitle: '洋务运动'
  },
  {
    question: '甲午中日战争中，北洋舰队全军覆没的战役是？',
    options: ['平壤战役', '黄海海战', '辽东战役', '威海卫战役'],
    answer: 3,
    periodId: 'period2',
    eventTitle: '甲午中日战争'
  },
  {
    question: '《马关条约》开放的通商口岸不包括？',
    options: ['沙市', '重庆', '苏州', '天津'],
    answer: 3,
    periodId: 'period2',
    eventTitle: '《马关条约》'
  },
  {
    question: '戊戌变法失败的根本原因是？',
    options: ['资产阶级力量弱小', '封建势力强大', '帝国主义干涉', '缺乏群众基础'],
    answer: 0,
    periodId: 'period3',
    eventTitle: '戊戌变法'
  },
  {
    question: '义和团运动的口号是？',
    options: ['自强求富', '扶清灭洋', '民主科学', '变法图强'],
    answer: 1,
    periodId: 'period3',
    eventTitle: '义和团运动'
  },
  {
    question: '《辛丑条约》的签订标志着中国？',
    options: ['开始沦为半殖民地', '半殖民地化加深', '完全沦为半殖民地', '开始近代化'],
    answer: 2,
    periodId: 'period3',
    eventTitle: '《辛丑条约》'
  },
  {
    question: '辛亥革命爆发的标志是？',
    options: ['武昌起义', '黄花岗起义', '保路运动', '同盟会成立'],
    answer: 0,
    periodId: 'period3',
    eventTitle: '武昌起义'
  },
  {
    question: '中华民国成立于哪一年？',
    options: ['1911年', '1912年', '1919年', '1921年'],
    answer: 1,
    periodId: 'period4',
    eventTitle: '中华民国成立'
  },
  {
    question: '新文化运动的口号是？',
    options: ['自强求富', '民主科学', '扶清灭洋', '变法图强'],
    answer: 1,
    periodId: 'period4',
    eventTitle: '新文化运动'
  },
  {
    question: '五四运动爆发的导火线是？',
    options: ['巴黎和会外交失败', '二十一条签订', '袁世凯称帝', '北洋军阀混战'],
    answer: 0,
    periodId: 'period4',
    eventTitle: '五四运动'
  },
  {
    question: '中国共产党第一次全国代表大会召开的地点是？',
    options: ['北京', '上海', '广州', '武汉'],
    answer: 1,
    periodId: 'period4',
    eventTitle: '中国共产党成立'
  },
  {
    question: '南昌起义发生在哪一年？',
    options: ['1926年', '1927年', '1928年', '1929年'],
    answer: 1,
    periodId: 'period5',
    eventTitle: '南昌起义'
  },
  {
    question: '井冈山革命根据地建立的意义是？',
    options: ['打响武装反抗第一枪', '开辟农村包围城市道路', '确立毛泽东领导地位', '实现国共合作'],
    answer: 1,
    periodId: 'period5',
    eventTitle: '秋收起义'
  },
  {
    question: '九一八事变发生在哪一年？',
    options: ['1929年', '1930年', '1931年', '1932年'],
    answer: 2,
    periodId: 'period5',
    eventTitle: '九一八事变'
  },
  {
    question: '红军长征开始的时间是？',
    options: ['1933年', '1934年', '1935年', '1936年'],
    answer: 1,
    periodId: 'period5',
    eventTitle: '红军长征'
  },
  {
    question: '遵义会议的意义是？',
    options: ['确立毛泽东领导地位', '结束王明左倾错误', '生死攸关的转折点', '以上都是'],
    answer: 3,
    periodId: 'period5',
    eventTitle: '遵义会议'
  },
  {
    question: '西安事变的和平解决标志着？',
    options: ['国共第一次合作', '抗日民族统一战线初步形成', '全面抗战开始', '解放战争开始'],
    answer: 1,
    periodId: 'period5',
    eventTitle: '西安事变'
  },
  {
    question: '七七事变发生在哪一年？',
    options: ['1935年', '1936年', '1937年', '1938年'],
    answer: 2,
    periodId: 'period6',
    eventTitle: '七七事变（卢沟桥事变）'
  },
  {
    question: '南京大屠杀发生在哪一年？',
    options: ['1936年', '1937年', '1938年', '1939年'],
    answer: 1,
    periodId: 'period6',
    eventTitle: '南京大屠杀'
  },
  {
    question: '百团大战的指挥者是？',
    options: ['毛泽东', '周恩来', '彭德怀', '朱德'],
    answer: 2,
    periodId: 'period6',
    eventTitle: '百团大战'
  },
  {
    question: '抗日战争胜利的时间是？',
    options: ['1944年', '1945年', '1946年', '1949年'],
    answer: 1,
    periodId: 'period6',
    eventTitle: '日本宣布无条件投降'
  },
  {
    question: '重庆谈判签订的协定是？',
    options: ['《双十协定》', '《停战协定》', '《和平协定》', '《联合协定》'],
    answer: 0,
    periodId: 'period7',
    eventTitle: '重庆谈判'
  },
  {
    question: '三大战役不包括？',
    options: ['辽沈战役', '淮海战役', '平津战役', '渡江战役'],
    answer: 3,
    periodId: 'period7',
    eventTitle: '三大战役'
  },
  {
    question: '渡江战役解放的城市是？',
    options: ['北京', '上海', '南京', '广州'],
    answer: 2,
    periodId: 'period7',
    eventTitle: '渡江战役'
  },
  {
    question: '中华人民共和国成立的时间是？',
    options: ['1948年10月1日', '1949年10月1日', '1950年10月1日', '1951年10月1日'],
    answer: 1,
    periodId: 'period7',
    eventTitle: '中华人民共和国成立'
  },
  {
    question: '中国近代史的开端是？',
    options: ['鸦片战争', '辛亥革命', '五四运动', '新中国成立'],
    answer: 0,
    periodId: 'period1',
    eventTitle: '鸦片战争'
  }
];

export default function StudyTest({ isOpen, onClose, onNavigateToEvent }) {
  const [phase, setPhase] = useState('start'); // start | quiz | result
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [studyRecords, setStudyRecords] = useState({
    totalTests: 0,
    totalCorrect: 0,
    bestAccuracy: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('studyRecords');
      if (saved) {
        setStudyRecords(JSON.parse(saved));
      }
    }
  }, []);

  const getRandomQuestions = (count) => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const startQuiz = () => {
    setCurrentQuestions(getRandomQuestions(5));
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setPhase('quiz');
  };

  const selectOption = (index) => {
    setSelectedOption(index);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = index;
    setUserAnswers(newAnswers);
  };

  const submitAnswer = () => {
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      showResult();
    }
  };

  const showResult = () => {
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    const accuracy = Math.round(correctCount / 5 * 100);

    const newRecords = {
      totalTests: studyRecords.totalTests + 1,
      totalCorrect: studyRecords.totalCorrect + correctCount,
      bestAccuracy: Math.max(studyRecords.bestAccuracy, accuracy)
    };

    setStudyRecords(newRecords);
    localStorage.setItem('studyRecords', JSON.stringify(newRecords));
    setPhase('result');
  };

  const restart = () => {
    setPhase('start');
  };

  const navigateToEvent = (periodId, eventTitle) => {
    if (onNavigateToEvent) {
      onNavigateToEvent(periodId, eventTitle);
    }
    onClose();
  };

  if (!isOpen) return null;

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / 5) * 100;

  let correctCount = 0;
  currentQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.answer) {
      correctCount++;
    }
  });
  const score = correctCount * 20;
  const accuracy = Math.round(correctCount / 5 * 100);
  const avgAccuracy = studyRecords.totalTests > 0
    ? Math.round((studyRecords.totalCorrect / (studyRecords.totalTests * 5)) * 100)
    : 0;

  return (
    <div className="study-page active">
      <div className="study-container">
        <div className="study-header">
          <h2>中国近代史学习测试</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* 学习统计 */}
        <div className="study-stats">
          <div className="stat-item">
            <span className="stat-label">总测试次数：</span>
            <span className="stat-value">{studyRecords.totalTests}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">平均正确率：</span>
            <span className="stat-value">{avgAccuracy}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">最高正确率：</span>
            <span className="stat-value">{studyRecords.bestAccuracy}%</span>
          </div>
        </div>

        {/* 开始页面 */}
        {phase === 'start' && (
          <div className="start-section">
            <h3>准备好测试你的知识了吗？</h3>
            <p>系统将随机抽取5道题目，测试你对中国近代史的掌握程度</p>
            <button className="start-test-btn" onClick={startQuiz}>开始测试</button>
          </div>
        )}

        {/* 答题页面 */}
        {phase === 'quiz' && currentQuestion && (
          <div className="quiz-section">
            <div className="quiz-progress">
              <span>题目 {currentQuestionIndex + 1} / 5</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="question-card">
              <h3 className="question-text">{currentQuestion.question}</h3>
              <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`option-item ${selectedOption === index ? 'selected' : ''}`}
                    onClick={() => selectOption(index)}
                  >
                    <div className="option-radio"></div>
                    <div className="option-text">{option}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quiz-actions">
              <button
                className="submit-btn"
                disabled={selectedOption === null}
                onClick={submitAnswer}
              >
                {currentQuestionIndex < 4 ? '提交答案' : '查看结果'}
              </button>
            </div>
          </div>
        )}

        {/* 结果页面 */}
        {phase === 'result' && (
          <div className="result-section">
            <h3>测试完成！</h3>
            <div className="result-score">
              <div className="score-circle">
                <span className="score-value">{score}</span>
                <span className="score-label">分</span>
              </div>
            </div>
            <div className="result-details">
              <p>正确题数：{correctCount} / 5</p>
              <p>正确率：{accuracy}%</p>
            </div>
            <div className="result-review">
              <h4>答题详情：</h4>
              {currentQuestions.map((question, index) => {
                const isCorrect = userAnswers[index] === question.answer;
                return (
                  <div key={index} className="review-item">
                    <div className="review-question">{index + 1}. {question.question}</div>
                    <div className={`review-answer ${isCorrect ? 'correct' : 'wrong'}`}>
                      你的答案：{userAnswers[index] !== undefined ? question.options[userAnswers[index]] : '未作答'}
                      {!isCorrect && <><br />正确答案：{question.options[question.answer]}</>}
                    </div>
                    <a
                      className="view-timeline-link"
                      onClick={() => navigateToEvent(question.periodId, question.eventTitle)}
                    >
                      查看时间轴相关内容
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="result-actions">
              <button className="restart-btn" onClick={restart}>再次测试</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
