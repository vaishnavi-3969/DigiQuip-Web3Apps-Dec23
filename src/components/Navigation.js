import { ethers } from 'ethers'
import { NavLink } from 'react-bootstrap'

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  return (
    <nav>
      <div className='nav__brand'>
        <h1>DigiQuip</h1>

        
        <ul className='nav__links'>
          <li><NavLink href="/">Concerts</NavLink></li>
          <li><NavLink href="/">Sports/Gaming</NavLink></li>
          <li><NavLink href="/">Arts & Theater</NavLink></li>
          <li><NavLink href="/">Townhall</NavLink></li>
        </ul>
      </div>

      {account ? (
        <button
          type="button"
          className='nav__connect'
        >
          {account.slice(0, 6) + '...' + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className='nav__connect'
          onClick={connectHandler}
        >
          Connect
        </button>
      )}
    </nav>
  );
}

export default Navigation;