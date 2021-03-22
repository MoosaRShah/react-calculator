import 'bootswatch/dist/slate/bootstrap.min.css'
import React, { useState } from 'react'

function App() {
  //hook to handle input
  const [expression, setExpression] = useState('')
  //hook to handle answer field
  const [answer, setAnswer] = useState(0)
  //function the displays clicked button and concatinates it to previous
  const display = symbol => {
    setExpression(prev => prev + symbol)
    if (expression[expression.length - 1] === '=') {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol)
        // setAnswer(0)
      } else {
        setExpression(answer + symbol)
        setAnswer(0)
      }
    }
  }
  //function which uses eval method to calculate string in inputfield which is assigned to expression state
  const calculate = () => {
    setAnswer(eval(expression))
    setExpression(prev => prev + '=')
  }
  //function to clear all inputs by setting inputfield to and empty string and answer field to 0
  const allClear = () => {
    setExpression('')
    setAnswer('0')
  }
  //function that deletes last input by splitting string into an array, removing last item, join array back into a string.
  const clear = () => {
    setExpression(prev =>
      prev
        .split('')
        .slice(0, prev.length - 1)
        .join('')
    )
    //clearing answer field
    setAnswer(0)
  }
  return (
    <div className='container'>
      <h1 className='text-center text-danger title display-3'>
        React Calculator
      </h1>
      <div className='grid'>
        <div className='dis'>
          <input
            type='text'
            value={expression}
            placeholder='0'
            className=''
            disabled
          />
          <input
            type='text'
            value={answer}
            placeholder='0'
            className='total text-warning'
            disabled
          />
          {/* <div className='total text-warning'>{answer}</div> */}
        </div>
        <button onClick={allClear} className='padButton AC btn btn-danger'>
          AC
        </button>
        <button onClick={clear} className='padButton C btn btn-secondary'>
          C
        </button>
        <button
          onClick={() => display('/')}
          className='padButton div btn btn-secondary'>
          /
        </button>
        <button
          onClick={() => display('*')}
          className='padButton times btn btn-secondary'>
          x
        </button>
        <button
          onClick={() => display('7')}
          className='padButton seven btn btn-primary'>
          7
        </button>
        <button
          onClick={() => display('8')}
          className='padButton eight btn btn-primary'>
          8
        </button>
        <button
          onClick={() => display('9')}
          className='padButton nine btn btn-primary'>
          9
        </button>
        <button
          onClick={() => display('-')}
          className='padButton minus btn btn-secondary'>
          -
        </button>
        <button
          onClick={() => display('4')}
          className='padButton four btn btn-primary'>
          4
        </button>
        <button
          onClick={() => display('5')}
          className='padButton five btn btn-primary'>
          5
        </button>
        <button
          onClick={() => display('6')}
          className='padButton six btn btn-primary'>
          6
        </button>
        <button
          onClick={() => display('+')}
          className='padButton plus btn btn-secondary'>
          +
        </button>
        <button
          onClick={() => display('1')}
          className='padButton one btn btn-primary'>
          1
        </button>
        <button
          onClick={() => display('2')}
          className='padButton two btn btn-primary'>
          2
        </button>
        <button
          onClick={() => display('3')}
          className='padButton three btn btn-primary'>
          3
        </button>
        <button onClick={calculate} className='padButton equal btn btn-info'>
          =
        </button>
        <button
          onClick={() => display('0')}
          className='padButton zero btn btn-primary'>
          0
        </button>
        <button
          onClick={() => display('.')}
          className='padButton dot btn btn-primary'>
          .
        </button>
      </div>
    </div>
  )
}

export default App
