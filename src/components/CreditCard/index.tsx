import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Card'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'

import { addMoney } from '../../reducers/Slice/registrationSlice'
import { useAppDispatch } from '../../reducers/store/hookRedux'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))



const Wallet = () => {
    
    const dispatch = useAppDispatch()
    
    const onSubmit = values => {
        dispatch(addMoney({walletAmount: values.sum}))
        // window.alert(JSON.stringify(values.sum))
    }

    return (

  <Styles>
    <h3>Заполните данные</h3>
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        active
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card
              number={values.number || ''}
              name={values.name || ''}
              expiry={values.expiry || ''}
              cvc={values.cvc || ''}
              sum={values.sum || ''}
              focused={active}
            />
            <div>
              <Field
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Номер карты"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Имя"
              />
            </div>
            <div>
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Срок пользования"
                format={formatExpirationDate}
              />
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
              />
            </div>
            <div>

               <Field
                name="sum"
                component="input"
                type="text"
                // pattern="\d{3,4}"
                placeholder="Введите сумму"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Пополнить
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Сбросить
              </button>
            </div>
            <h2>Values</h2>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )
      }}
    />
  </Styles>
    )
    }

export default Wallet

