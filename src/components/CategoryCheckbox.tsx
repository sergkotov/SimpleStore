import { FC } from "react";
import { CategoryCheckboxProps } from "../types/storeTypes";

const CategoryCheckbox : FC<CategoryCheckboxProps> = (props: CategoryCheckboxProps) => {
    return(
        <label className="type-filter__checkbox">
            <input type="checkbox" name={props.name} defaultChecked onChange={() => props.onClickCheckbox(props.name)}/>
            <span className="type-filter__checkmark"></span>
            {props.value}
        </label>
    );
};

export default CategoryCheckbox;

