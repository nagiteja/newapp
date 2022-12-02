import Button from "./Button"


const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
  return (
    <header className = 'header'>
      <h1 style = {headingstyle}>{title}</h1>
      <Button color="red" text = "don't click" onClick={onClick}/>
      <Button color="black" text = "nothing" onClick={onClick}/>
      <Button color="green" text = "click" onClick={onClick}/>

    </header>
  )
}

Header.defaultProps = {
    title: 'default title'
}

const headingstyle = {
    color: 'red',
    backgroundColor: 'blue'
}

export default Header
