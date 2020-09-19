import React from "react";

const DetailedItem = ({hidden, data}) => {
    const { firstName, lastName, description, address: { streetAddress, city, state, zip}} = data;


    return (
        <div className={!hidden ? "d-none" : ""}>
            <div>
                Выбран пользователь <b>{firstName} {lastName}</b>
            </div>
            <div>
                Описание: <textarea defaultValue={description} />
            </div>
            <div>
                Адрес проживания: <b>{streetAddress}</b>
            </div>
            <div>
                Город: <b>{city}</b>
            </div>
            <div>
                Провинция/штат: <b>{state}</b>
            </div>
            <div>
                Индекс: <b>{zip}</b>
            </div>
        </div>
    );
};

export default DetailedItem;
