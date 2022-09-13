<template lang="pug">
.maincontent
  .welcome-section
    section.hero(ref="main")&attributes({'data-section-id': 'main'})
      .container.hero__container
        header.header
          .header__logo
            a.logo(href="#") AY
          .header-container
            .header__menu
              menu-comp(:menuLinks="menuLinks", @scroll-to="scrollToSection") 
            .header__buttons
              socials-comp(:socials="socials")
            hamburger-btn-comp(
              :modalIsActive="modalIsActive",
              @handleChange="$emit('handleChange', $event)"
            )
        .hero__content
          .userinfo
            .userinfo__title Personal website #[span.userinfo__occ web developer]
            .userinfo__name Mount
        .hero__downbutton
          .scroll-down
            a.scroll-down__btn(href="") Scroll

    section#about.about(ref="about")&attributes({'data-section-id': 'about'})
      .container
        .about__columns
          .about__user
            .user
              .user__avatar
                .user__avatar-wrapper
                  images-comp(
                    :path="'content/user.jpg'",
                    :className="'user__avatar-pic'"
                  )
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
                      td.user__table-title #{ item[0] }
                      td.user__table-content #{ item[1] }
          .about__user-text
            .about__main-text-content
              .about__desc Hi, my name is
              .about__title Alexey Ya
              .about__text-info
                p I am engaged in the development of modern websites and applications. I like to make interesting and modern projects.
            .about__ps
              | I made this website as part of my training at the LoftSchool Online Education School. I will refresh my content in it a little later. In the meantime, look how cool and beautiful everything is here!

  .triangles.triangles_top
    svg.triangles__shape.triangles__shape_left(viewBox="0 0 1000 100", preserveAspectRatio="none")
      polygon(points="0,0 0,100 1000,100")
    svg.triangles__shape.triangles__shape_right(viewBox="0 0 1000 100", preserveAspectRatio="none")
      polygon(points="0,100 1000,100 1000,0")
  .middle-section
    section.values(ref="skills")&attributes({'data-section-id': 'skills'})
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

    section.works(ref="works")&attributes({'data-section-id': 'works'})
      .container.works__container
        .section-title.works__section-title My works
        .works__content
          works-comp

  .triangles.triangles_bottom
    svg.triangles__shape.triangles__shape_left(viewBox="0 0 1000 100", preserveAspectRatio="none")
      polygon(points="0,0 1000,0 1000,100")
    svg.triangles__shape.triangles__shape_right(viewBox="0 0 1000 100", preserveAspectRatio="none")
      polygon(points="0,0 0,100 1000,0")
  section.contacts(ref="reviews")&attributes({'data-section-id': 'reviews'})
    .container.contacts__container
      .contacts__about
        reviews-comp

  footer.footer
    .container.footer__container
      .footer__copyright
        .footer__copyright-col
          .footer__copyright-year &copy; 2020
        .footer__copyright-userinfo
          .footer__copyright-name Alexey Ya
          .footer__data-text Личный сайт веб - разработчика
      .footer__data
        menu-comp.menu--color-white.footer__data-menu(:menuLinks="menuLinks", @scroll-to="scrollToSection")
        .footer__data-content
          .footer__data-col
            .footer__data-text
              p Этот сайт я сделал в рамках обучения в Школе онлайн образования Loftschool
            .footer__data-socials
              socials-comp.socials--round-borders(:socials="socials")
          .footer__data-col
            .text-quote
              .text-quote__text
                p Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает где вы живете
              .text-quote__author Martin Golding
</template>

<script>
import { eventBus } from "./main.js";
import images from "./components/images-app";
import hamburger from "./components/hamburger-btn";
import menu from "./components/menu";
import socials from "./components/socials";
import skills from "./components/skills";
import works from "./components/works";
import reviewsComponent from "./components/reviews";

export default {
  components: {
    imagesComp: images,
    hamburgerBtnComp: hamburger,
    menuComp: menu,
    socialsComp: socials,
    skillsComp: skills,
    worksComp: works,
    reviewsComp: reviewsComponent,
  },
  props: {
    modalIsActive: Boolean,
    menuLinks: Array,
    socials: Array,
  },
  methods: {
    scrollToSection(attr) {
      // добавил prevent на click в menu-comp
      const elem = this.$refs[attr];
      elem.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() {
    eventBus.$on("scrollFromPopup", (data) => {
      console.log(data);
      // const elem = this.$refs[data];
      // console.log(elem);
      // elem.scrollIntoView({
      //   behavior: 'smooth'
      // });
    });
  },
};
</script>

<style lang="postcss">
@import "./styles/main.pcss";
</style>