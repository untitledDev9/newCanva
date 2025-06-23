import React, { useState } from 'react'
import FontPicker from 'font-picker-react'
import { ChromePicker } from 'react-color';

const HeroEditBox = () => {
  const [count, setCount] = useState(15)
  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(15)

  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const bold = () => setIsBold(prev => !prev)
  const italic = () => setIsItalic(prev => !prev)
  const underline = () => setIsUnderline(prev => !prev)

  const [activeFont, setActiveFont] = useState('Open Sans')

  const [showInput, setShowInput] = useState(false);
  const [color, setColor] = useState('#333');
  const [open, setOpen] = useState(false)
  const toggleText = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <div onClick={toggleText} className='w-fit cursor-pointer relative mx-auto my-4'>
        <h1 className='bg-amber-300 text-xl md:text-2xl px-4 py-2 rounded'>{open ? "Close Edit" : "Edit Text"}</h1>
      </div>

      {open && (
        <div className='py-4 px-4 md:px-10 absolute z-50 bg-gray-600 left-4 md:left-28 w-[90%] md:w-fit h-fit flex flex-col justify-center items-center gap-5 rounded shadow-lg'>
          <div
            className='py-2 px-4 bg-amber-500 rounded cursor-pointer hover:bg-amber-600'
            onClick={() => setShowInput(true)}
          >
            <p className='text-white'>Add Text</p>
          </div>

          <div className='w-full md:w-auto'>
            <ChromePicker
              color={color}
              onChangeComplete={(updatedColor) => setColor(updatedColor.hex)}
            />
          </div>

          <div className='w-full'>
            <FontPicker
              apiKey="AIzaSyCXtUmPQQEeWzZHf4ewWzUPRz6zUy3AaFc"
              activeFontFamily={activeFont}
              onChange={(nextFont) => setActiveFont(nextFont.family)}
            />
          </div>
        </div>
      )}

      <div className="p-4 md:p-6 flex flex-col gap-4 items-center max-w-screen-lg mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          <button onClick={increment} className="bg-green-500 px-4 py-2 text-white rounded">A+</button>
          <button onClick={toggleText} className="bg-green-500 px-4 py-2 text-white rounded">Color</button>
          <input
            className="text-center w-16 py-2 bg-gray-700 text-white rounded"
            placeholder={count}
          />
          <button onClick={reset} className="bg-gray-500 px-4 py-2 text-white rounded">Reset</button>
          <button onClick={decrement} className="bg-red-500 px-4 py-2 text-white rounded">A-</button>
          <button onClick={bold} className={`px-4 py-2 rounded text-white ${isBold ? 'bg-blue-700' : 'bg-blue-500'}`}>B</button>
          <button onClick={italic} className={`italic px-4 py-2 rounded text-white ${isItalic ? 'bg-purple-700' : 'bg-purple-500'}`}>I</button>
          <button onClick={underline} className={`underline px-4 py-2 rounded text-white ${isUnderline ? 'bg-yellow-600' : 'bg-yellow-400 text-black'}`}>U</button>
        </div>

        <div className='w-full md:w-[600px] h-[200px] bg-amber-100 flex justify-center items-center rounded-md shadow-md px-2' onClick={() => setShowInput(true)}>
          {showInput ? (
            <input
              type="text"
              placeholder="Your paragraph text"
              style={{
                fontSize: `${count}px`,
                fontFamily: activeFont,
                fontWeight: isBold ? 'bold' : 'normal',
                fontStyle: isItalic ? 'italic' : 'normal',
                textDecoration: isUnderline ? 'underline' : 'none',
                color: `${color}`
              }}
              className="border border-gray-500 rounded px-4 py-2 w-full md:w-auto text-center"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default HeroEditBox
