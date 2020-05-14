import React from "react";
import { connect } from "react-redux";
import { getCharacter } from "../actions/actions";

const Character = (props) => {

  
  const getRandom = () => {
    return Math.floor(Math.random() * 400);
  };

  if (props.loading === true) {
    return <h1>loading</h1>;
  }

  if (props.loading === false) {
    return (
      <div className="cont">
        {props.character ? <div><h1>{props.character.name}</h1> <img src={props.character.image}/> </div> : null}
        <div>
          <button onClick={() => props.getCharacter(getRandom())}>
            get Character
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { getCharacter })(Character);
