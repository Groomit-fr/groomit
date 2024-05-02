import React from 'react'
import "./Apropos.scss"

function Apropos() {
  return (
    <section className='apropos'>
      <div className="apropos__banner" >
        <h1>À propos de Groomit</h1>
        <h2>Pour toi + moi + tous ceux qui le veulent</h2>
        <div className="apropos__banner__filter">
          <a className="apropos__banner__filter__item" href='#Qui'>
            <img src="/img/show_all.svg" />
            <p>C'est qui <br /> Groomit ?</p>
          </a>
          <a className="apropos__banner__filter__item" href='#Quoi'>
            <img src="/img/show_all.svg" />
            <p>C'est quoi Groomit ?</p>
          </a>
          <a className="apropos__banner__filter__item" href='#Tech'>
            <img src="/svg/apropos/techs.svg" />
            <p>Les techniques de Groomit.</p>
          </a>
        </div>
      </div>

      <section className='apropos__body'>
        <img className="apropos__body__rope" src="/svg/List/rope.svg" alt="" />
        <section className='apropos__body__item left'>
          <section className='apropos__body__item__text' id='Qui'>
            <h3>
              C’est qui Groomit ?
            </h3>
            <p>
              Groomit, c’est un homo sapiens qui, comme tous les autres, doit manger pour vivre. Sauf que, Groomit, la chasse c’est pas son truc et les fruits pourris, ça nourrit pas une famille.
              C’est donc dans les années 90 qu’il se lance dans l’imprimerie. Parce qu’imprimer des trucs, ça, il sait faire.
              Conducteur offset pendant presque 30 ans, il imprime des emballages alimentaires, travaille à l’usine, s’use la santé, tout ça pour une production de masse, destinée à la poubelle.
              <br />
              <br />
              Aujourd’hui, il met son expérience à votre service, ou plutôt à celui de votre penderie... parce que Groomit, il aime bien rendre service.
            </p>
          </section>
          <section className='apropos__body__item__illu'>
            <img src="/img/apropos/groomitPic.png" alt="" className='apropos__body__item__illu__first' />
          </section>
        </section>
        <img className="apropos__body__rope" src="/svg/List/rope.svg" alt="" />
        <section className='apropos__body__item right'>
          <section className='apropos__body__item__text' id='Quoi'>
            <h3>
              C’est quoi Groomit ?
            </h3>
            <p>
              Groomit, c’est une marque de vêtements fait à la main, à deux mains même.
              C’est des t-shirts et hoodies créés avec passion dans un atelier à taille humaine où règne la bonne humeur, et aussi les petites blagues qui font sourire.
              Tout ça dans le respect de l’environnement, des petits chemins qui sentent la noisette et des petits oiseaux qui font toujours du bruit quand il ne faut pas... en tout cas il fait tout pour.
              <br />
              <br />
              Finalement, Groomit c’est un peu tout ça, et un peu tout le reste, c’est mettre les deux mains à la pâte pour faire des vêtements de qualité, ne mettre qu’un seul pied dans le système, et retrouver l’essentiel.
            </p>
          </section>
          <section className='apropos__body__item__illu'>
            <img src="/img/apropos/groomitPic2.png" alt="" className='apropos__body__item__illu__first' />
          </section>
        </section>
        <section className='apropos__body__techs' id='Tech'>
          <h3>
            Les techniques
          </h3>
          <section className='apropos__body__techs__item'>
            <section className='apropos__body__techs__item__text'>
              <h4>Le Flex
                <img src="svg/apropos/dot.svg" alt="" />
              </h4>
              <p>
                Le flocage est une technique de marquage par transfert thermique. Le visuel découpé est
                thermocollé à haute température sur le textile. <br /> Le Flex peut avoir différents aspects : velours, lisse,
                fluo, pailleté, phospho, etc… Tout type de textile peut être floqué.<br />
                <br />
                Parfait pour les petites quantités.
              </p>
            </section>
            <section className='apropos__body__techs__item__illu'>
              <img src="/svg/apropos/flex.png" alt="" />
            </section>
          </section>
          <section className='apropos__body__techs__item'>
            <section className='apropos__body__techs__item__text'>
              <h4>La sérigraphie
                <img src="svg/apropos/dot.svg" alt="" />
              </h4>
              <p>
                La sérigraphie textile est une technique d'impression directe, reconnue pour sa capacité à transférer de l'encre directement sur le textile via un écran ou pochoir. Cette méthode unique permet à l'encre, une fois chauffée, de se fondre avec la fibre textile sans la détériorer.
                <br /> <br />
                Parfaite pour les grandes séries.
              </p>
            </section>
            <section className='apropos__body__techs__item__illu'>
              <img src="/svg/apropos/serigraphie.png" alt="" />
            </section>
          </section>
          <section className='apropos__body__techs__item'>
            <section className='apropos__body__techs__item__text'>
              <h4> L'impréssion numérique
                <img src="svg/apropos/dot.svg" alt="" />
              </h4>
              <p>
                L’impression est faite par une imprimante sur un film de transfert qui sera ensuite thermocollé sur le
                textile. Cette technique permet de réaliser tout type de visuel sans limite de couleur en respectant
                les contrastes et les dégradés.                <br /> <br />
                Parfait pour les petites à moyennes séries.
              </p>
            </section>
            <section className='apropos__body__techs__item__illu'>
              <img src="/svg/apropos/print.png" alt="" />
            </section>
          </section>

        </section>
      </section>
    </section>
  )
}

export default Apropos