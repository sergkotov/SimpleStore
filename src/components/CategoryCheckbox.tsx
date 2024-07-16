const CategoryCheckbox = () => {
    return(
        <label className="type-filter__checkbox">
            <input type="checkbox" defaultChecked/>
            <span className="type-filter__checkmark"></span>
            Новинки
        </label>
    );
};

export default CategoryCheckbox;

