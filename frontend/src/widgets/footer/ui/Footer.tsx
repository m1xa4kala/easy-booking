import { LogoSvg } from '@/shared/assets'
import { Button, Container } from '@/shared/ui'
import './Footer.scss'

export const Footer = () => {
  const tmeImageSrc = new URL('/telegram.png', import.meta.url).href
  const vkImageSrc = new URL('/vk.png', import.meta.url).href
  return (
    <div className='footer'>
      <Container className='footer__container'>
        <div className='footer__logo'>
          <LogoSvg width={50} height={50} />
          <h1 className='footer__title'>Easy Booking</h1>
        </div>
        <div className='footer__body'>
          <div className='feedback'>
            <h2>Обратная связь</h2>
            <hr />
            <p>
              Если у вас есть какие-либо отзывы, пожалуйста, не стесняйтесь
              обращаться к нам.
            </p>
            <div className='feedback__form'>
              <input
                className='feedback__input'
                type='text'
                placeholder='Ваша почта'
              />
              <textarea
                rows={5}
                cols={20}
                className='feedback__textarea'
                placeholder='Ваш отзыв'
              ></textarea>
              <Button className='feedback__button'>Отправить</Button>
            </div>
          </div>
          <div className='contacts'>
            <h2>Контакты</h2>
            <hr />
            <div className='contacts__phone'>
              <h3>Телефон:</h3>
              <p>+7 (999) 999-99-99</p>
            </div>
            <div className='contacts__email'>
              <h3>Электронная почта:</h3>
              <p>5qkzG@example.com</p>
            </div>
            <div className='contacts__social'>
              <img src={vkImageSrc} alt='VK' />
              <img src={tmeImageSrc} alt='Telegram' />
            </div>
          </div>
        </div>
        <div className='footer__copyright'>
          <p>© 2024 Easy Booking. Все права защищены.</p>
        </div>
      </Container>
    </div>
  )
}
