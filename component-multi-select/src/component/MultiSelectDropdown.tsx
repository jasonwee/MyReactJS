import React from 'react'

import "./multiselectdropdown.scss";
import Dropdown from './down.png'

export interface Row {
  id: number;
  title: string;
}

interface IProps {
  rows: Row[];
  selected: number[];
  toggleOption: (id: number) => void;
}

const MultiSelectDropdown = (props: IProps) => {

    return (
           <div className="c-multi-select-dropdown">
               <div className="c-multi-select-dropdown__selected">
                  <div>{props.selected.length} selected</div>
                  <img src={Dropdown}/>
               </div>
               <ul className="c-multi-select-dropdown__options">
                {props.rows.map(option => {
                    const isSelected = props.selected.includes(option.id);

                    return (
                        <li key={option.id} className="c-multi-select-dropdown__option" onClick={() => props.toggleOption(option.id)}>
                            <input type="checkbox" defaultChecked={isSelected} className="c-multi-select-dropdown__option-checkbox"></input>
                            <span>{option.title}</span>
                        </li>
                    )
                })}
               </ul>
            </div>
    );
}

export default MultiSelectDropdown;
