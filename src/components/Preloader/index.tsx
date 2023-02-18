import './Preloader.css';
import logo  from '../../assets/imgs/logo/logo.svg'

export function Preloader(){
  return (
    <div className="preloader bg-green-primary">
      <div className="preloader__spinner">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
