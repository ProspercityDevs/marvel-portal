import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { BsSquareFill } from 'react-icons/bs';

MovieItem.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool
  };

function MovieItem() {
  return (
    // <div className="">
    //   <div className="">
    <>
      <span className="checkbox">
             <BsSquareFill className={`check-icon1 ${MovieItem.checked && 'check-icon-open1'}`} />
           </span>
           <span className="item-text">{MovieItem.name}</span>

        {/* <img src={props.photoUrl} className="App-fotoTeamMember" alt="logo" />    
        <a href={props.gitHubUrl} className='MemberName'>{props.memberName}</a> */}
    </>
    //  </div>
    // </div>
    
  );
}

export {TeamItem};