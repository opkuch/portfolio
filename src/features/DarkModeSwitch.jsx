import { useDispatch, useSelector } from 'react-redux'

export default function DarkModeSwitch() {
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.featureModule.isDark)

  const switchMode = async () => {
    const isDone = dispatch({ type: 'TOGGLE_DARKMODE', isDark: !isDark })
    localStorage.setItem('isDark', isDone.isDark)
  }

  return (
    <div className="switch-wrapper">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={() => switchMode()}
        checked={!isDark? true : false}
      />
      <label htmlFor="checkbox" className="label">
        <div className="ball"> </div>
      </label>
    </div>
  )
}
