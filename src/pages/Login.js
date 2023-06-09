import React from "react";
import {Button, Form, Input, notification} from "antd";
import {useDispatch} from "react-redux";
import { useLocation, useNavigate} from 'react-router-dom';

import {checkUnoUser} from "../checkUnoUser";
import {fetchDataSuccess} from "../store/actions/request";
import {saveToLocalStorage, STORAGE_ITEM_NAME} from "../storage";

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const locationState = useLocation().state
    const [api, contextHolder] = notification.useNotification();

    const requiredRule = {
        required: true,
        message: 'Обязательное поле'
    }

    const handlerSubmit = async ({username, password}) => {
        const check = await checkUnoUser({user: username, password})
        if (check) {
            dispatch(fetchDataSuccess({data: username, key: 'user'}))
            saveToLocalStorage(STORAGE_ITEM_NAME, username);
            navigate(locationState?.from || '/', { replace: true })
        } else {
            api.error({
                message: "Ошибка!",
                description: <span dangerouslySetInnerHTML={{__html:"Имя пользователя или пароль введены не&nbsp;верно"}} />,
                placement: "top"
            })
        }
    }

    return <>
        {contextHolder}

        <Form name="authForm"
              className="authForm"
            onFinish={handlerSubmit}
            autoComplete="off"
        >
            <div className="subtitle">Форма авторизации</div>
            <Form.Item
                label="Логин"
                name="username"
                rules={[requiredRule]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[requiredRule, {
                    minLength: 5
                }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item className="authForm-submit">
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    </>
}

