<template>
  <div>
    <main id="swup" class="transition-fade">
      <div class="contact">
        <h2>Contact</h2>
        <div class="contact__link">
          <ul>
            <li>
              <a href="https://github.com/benaissa-saida" class="contact__link--style contact__link--git">
                <i class="fab fa-github"></i>
                benaissa-saida
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saida-benaissa-773863191/" class="contact__link--style">
                <i class="fab fa-linkedin-in"></i>
                Saida Benaissa 
              </a>
            </li>
          </ul>
          <div class="contact__link--info">
            <p>
              En espérant que mes travaux vous aient plu, je suis disponible et à votre écoute !
              <br/>
              Vous pouvez à la fois me contacter via Linkedin et par mail. 
            </p>
            <a href="mailto:'benaissasaida28@gmail.com'" class="contact__link--btn">
              On en discute 
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>    
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss">
$color-activeLink: #BE3818;
$bg-secondary: #EC6C0C;

.contact{
  height: 74vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
	width: 100%;
	&__link{
		display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & ul{
      display: flex;
      flex-direction: column;
    }
		& li{
			list-style: none;
			list-style-type: none;
			margin: 0.3em;
		}
		&--style{
			position: relative;
			text-decoration: none;
			color: $color-activeLink;
			font-size: 1rem; 
			&::before{
				content: '';
				position: absolute;
				bottom: -2px;
				left: 0;
				right: 0;
				height: 2px;
				background-color: $bg-secondary;
				transform-origin: bottom right;
				transform: scaleX(0);
				transition: transform 0.5s ease;
			}
			&:hover::before{
				transform-origin: bottom left;
				transform: scaleX(1);
			}
		}
    &--info{
      display: flex;
      flex-direction: column;
      width: 90%;
      align-items: center;
      margin-top: 1em;
      & p{
        margin-bottom: 1em;
      }
    }
		&--btn{
			text-decoration: none;
			color: $color-activeLink;
			background-color: #fff;
			padding: 0.6em 0.6em;
			font-size: 1.2rem; 
			border-radius: 0.9em;
			border: 1px solid $color-activeLink;
		}
	}
}

@media (min-width:600px) and (max-width:1000px){
  .contact{
    &__link{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-evenly;
      width: 100%;

      &--info{
        width: 40%;
      }
    }
  }
}

@media (min-width:1000px){
  .contact{
    &__link{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-evenly;
      width: 100%;

      &--info{
        width: 40%;
      }
    }
  }
}
</style>
