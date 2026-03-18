/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';


function Header() {
  const [isDark, setIsDark] = useState(false)
  const [primaryColor, setPrimaryColor] = useState('#4F46E5') // Default primary color

  // 초기 로드 시 테마와 색상 설정
  useEffect(() => {
    // 로컬 스토리지에서 테마와 색상 가져오기
    const storedTheme = localStorage.getItem('theme');
    const storedColor = localStorage.getItem('primaryColor');

    // window.matchMedia('(prefers-color-scheme: dark)') 사용자가 시스템에서 다크 모드를 선호하는지 확인하는 미디어 쿼리
    // 저장된 테마가 다크이거나, 저장된 테마가 없고 사용자가 시스템에서 다크 모드를 선호하는 경우 다크 모드 적용
    if (storedTheme === 'dark'||
      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }

    if (storedColor) {
      setPrimaryColor(storedColor);
      document.documentElement.style.setProperty('--color-primary', storedColor);
    }else{
      document.documentElement.style.setProperty('--color-primary', '#4F46E5');
    }
  }, [])



  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  }
  const handleColorChange = (e) => {
    const color = e.target.value;
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--color-primary', color);
    localStorage.setItem('primaryColor', color);
  }
  


  return (
    <header
      className="flex items-center justify-between
      py-6 px-4
      border-b border-app-gray dark:border-app-dark-border 
      bg-white dark:bg-app-dark-card 
      transition-colors duration-200
      "
    >
      <h1
      className="
      text-2xl font-bold tracking-tight 
      text-toss-text dark:text-toss-dark-text 
      cursor-default"
      >Todo List _ JaeHee-Dev</h1>
      <div className="flex items-center space-x-3">
           <input 
            className="w-12 h-12 cursor-pointer border-0 p-0 rounded-full"
            type="color" 
            value={primaryColor} 
            onChange={handleColorChange}    
            title="Primary Color Change"
          />
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-center
           w-8 h-8 rounded-full 
           bg-app-gray dark:bg-gray-700 
           hover:opacity-80 transition-opacity"
          aria-label="Toggle Dark Mode"
        >
          <span className="text-sm">{isDark ? '🌙' : '☀️'}</span>
        </button>
      </div>
    </header>
  )
}

export default Header