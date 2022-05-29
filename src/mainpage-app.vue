<template lang="pug">
  .maincontent
    .welcome-section
      section.hero&attributes({'data-section-id': 'main'})
        .container.hero__container
          header.header
            .header__logo
              a.logo(href="#") AY
            //- #header-component
            .header-container
              .header__menu
                menu-comp(
                  :menuLinks="menuLinks"
                )  
              .header__buttons
                socials-comp(
                  :socials="socials"
                )  
              button.header__hamburger-btn.hamburger.hamburger--vortex
                span.hamburger-box
                  span.hamburger-inner

          .hero__content
            .userinfo
              .userinfo__title Personal website #[span.userinfo__occ web developer]
              .userinfo__name Mount
          .hero__downbutton
            .scroll-down
              a(href="").scroll-down__btn Scroll

      section.about&attributes({'data-section-id': 'about'})
        .container
          .about__columns
            .about__user
              .user
                .user__avatar
                  .user__avatar-wrapper
                    imagesComp(
                      :path="'content/user.jpg'"
                      :className="'user__avatar-pic'"
                    )
                    //- +image('content/user.jpg', 'user__avatar-pic')
                .user__about
                  - 
                    var userinfo = [
                      ['Live:', "Nizhny Novgorod"],
                      ['Age:', "27 years"],
                      ['Born:', "1 January 1991"],
                    ];
                  table.user__table
                    each item in userinfo
                      tr
                        td.user__table-title #{item[0]}
                        td.user__table-content #{item[1]}
            .about__user-text
              .about__main-text-content
                .about__desc Hi, my name is
                .about__title Alexey Ya
                .about__text-info
                  p I am engaged in the development of modern websites and applications. I like to make interesting and modern projects.
              .about__ps
                | I made this website as part of my training at the LoftSchool Online Education School. I will refresh my content in it a little later. In the meantime, look how cool and beautiful everything is here!

    .triangles.triangles_top
      svg(viewBox="0 0 1000 100" preserveAspectRatio="none").triangles__shape.triangles__shape_left
        polygon(points="0,0 0,100 1000,100")
      svg(viewBox="0 0 1000 100" preserveAspectRatio="none").triangles__shape.triangles__shape_right
        polygon(points="0,100 1000,100 1000,0")
    .middle-section
      section.values&attributes({'data-section-id': 'skills'})
        .container.values__container
          .values__wrapper
            .values__title
              .values__title-container
                .values__title-text What can I do for you
                .values__content
                  p I made this website as part of my training at the LoftSchool Online Education School. I will refresh my content in it a little later. In the meantime, look how cool and beautiful everything is here!
    
            .values__widget
              .values__widget-container
                skills-comp
              //-   - 
              //-     var skillsCategories = [
              //-       ["Frontend", ["HTML5", "CSS3", "Javascript", "Vue.js"]],
              //-       ["Workflow", ["GIT", "Terminal", "Gulp", "Webpack"]]
              //-     ];

              //-   ul.skills
              //-     each category in skillsCategories
              //-       li.skills__item(v-for="category in categories")
              //-         .skills-row
              //-           .skills-row__title #{category[0]}
              //-           ul.skills-row__list
              //-             each skill in category[1]
              //-               li.skills-row__item
              //-                 .skill
              //-                   svg(viewBox="0 0 100 100").skill__circle-shape
              //-                     circle(cx="50" cy="50" r="40").skill__circle.skill__circle_under
              //-                     circle(cx="50" cy="50" r="40" stroke="url(#gradient)" transform='rotate(180 50 50)').skill__circle.skill__circle_above
              //-                     linearGradient(id="gradient" x1="0%" y1="0%" x2="100%" y2="0")
              //-                       stop(offset="0%" stop-color="#5500f2")
              //-                       stop(offset="100%" stop-color="#8f00ef")
              //-                   .skill__circle-text #{skill}
    
      section.works&attributes({'data-section-id': 'works'})
        .container.works__container
          .section-title.works__section-title My works
          .works__content
            #works-component
            //- .works-slider
            //-   .works-slider__pics(data-slide="1")
            //-     .works-slider__pics-content
            //-       +image('content/slider-1.jpg', 'works-slider__fullpic')
            //-       ul.works-slider__thumbs
            //-         - for (var i = 3; i > 0; i--)
            //-           li.works-slider__thumb-item(class=`${i === 1 ? 'active' : ''}`)
            //-             a(href="").works-slider__thumb-link
            //-               +image(`content/slider-${i}.jpg`, 'works-slider__thumb')
            //-       .works-slider__buttons
            //-         a(href="#").works-slider__btn.works-slider__btn_next
            //-         a(href="#").works-slider__btn.works-slider__btn_prev
            //-   .works-slider__info
            //-     ul.works-slider__tags
            //-       - var tags = ['HTML', 'CSS', 'JavaScript'];
            //-       each item in tags
            //-         li.works-slider__tag-item 
            //-           .tag #{item}
            //-     .works-slider__title Website of the School of Education
            //-     .works-slider__desc
            //-       p This guy was trained in web development not somewhere, but at LoftSchool! 2 months of only the most difficult trials and sleepless nights!
            //-     .works-slider__link 
            //-       a(href="").iconed-link View the website

    .triangles.triangles_bottom
      svg(viewBox="0 0 1000 100" preserveAspectRatio="none").triangles__shape.triangles__shape_left
        polygon(points="0,0 1000,0 1000,100")
      svg(viewBox="0 0 1000 100" preserveAspectRatio="none").triangles__shape.triangles__shape_right
        polygon(points="0,0 0,100 1000,0")
    section.contacts&attributes({'data-section-id': 'reviews'})
      .container.contacts__container
        .contacts__about
          #reviews-component
          //- .reviews
          //-   .reviews__header
          //-     .reviews__title.section-title What they say about me
          //-     .reviews__buttons
          //-       .reviews__btn.reviews__btn_prev
          //-       .reviews__btn.reviews__btn_next
          //-   ul.reviews__content
          //-     - for (var i = 0; i < 2; i++)
          //-       li.reviews__content-item
          //-         .quote
          //-           .quote__text
          //-             p This guy was trained in web development not somewhere, but at LoftSchool! 2 months of only the most difficult trials and sleepless nights!
          //-           .quote__user
          //-             .user-min
          //-               .user-min__avatar
          //-                 .user-min__pic-wrapper
          //-                   +image('content/user.jpg', 'user-min__avatar-pic')
          //-               .user-min__info
          //-                 .user-min__name Ковальчук Дмитрий
          //-                 .user-min__occ Основатель Loftschool
    footer.footer
      .container.footer__container
        .footer__copyright
          .footer__copyright-col
            .footer__copyright-year &copy; 2020 
          .footer__copyright-userinfo
            .footer__copyright-name Alexey Ya
            .footer__data-text Личный сайт веб - разработчика
        .footer__data
          menu-comp(
            :menuLinks="menuLinks"
          ).menu--color-white.footer__data-menu
          //- nav.menu.menu--color-white.footer__data-menu
          //-   ul.menu__list
          //-     - var menuLinks = [{name:"About me", data:"about"}, {name:"Skills", data:"skills"}, {name:"Works", data:"works"}, {name:"Reviews", data:"reviews"}];
          //-     each item in menuLinks 
          //-       li.menu__item
          //-         a(href="#").menu__link&attributes({'data-scroll-to':`${item.data}`}) #{item.name}
          .footer__data-content
            .footer__data-col
              .footer__data-text
                p Этот сайт я сделал в рамках обучения в Школе онлайн образования Loftschool
              .footer__data-socials
                socials-comp(
                  :socials="socials"
                ).socials--round-borders
                //- ul.socials.socials--round-borders
                //-   - var socials = ['insta', 'vk', 'github', 'envelope'];
                //-   each item in socials
                //-     li.socials__item
                //-       a(href="#").socials__link
                //-         +icon(item, 'socials__icon')
            .footer__data-col
              .text-quote
                .text-quote__text
                  p Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает где вы живете 
                .text-quote__author Martin Golding
</template>

<script>
import menu from "./components/menu";
import socials from "./components/socials";
import images from "./components/images-app";
import skills from "./components/skills";

export default {
  components: {
    menuComp: menu,
    socialsComp: socials,
    imagesComp: images,
    skillsComp: skills
  },
  data() {
    return {
      menuLinks: [
        {name:"About me", data:"about"},
        {name:"Skills", data:"skills"},
        {name:"Works", data:"works"},
        {name:"Reviews", data:"reviews"}
      ],
      socials: ['insta', 'vk', 'github', 'envelope']
    }
  }
}
</script>

<style lang="postcss">
@import "./styles/main.pcss"
</style>