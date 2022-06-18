<template lang="pug">
.maincontent
  .welcome-section
    section(ref="main").hero&attributes({'data-section-id': 'main'})
      .container.hero__container
        header.header
          .header__logo
            a.logo(href="#") AY
          .header-container
            .header__menu
              menu-comp(
                :menuLinks="menuLinks"
                @scroll-to="scrollTosection"
              )  
            .header__buttons
              socials-comp(
                :socials="socials"
              )
            hamburger-btn-comp(@handleChange="$emit('handleChange', $event)")
        .hero__content
          .userinfo
            .userinfo__title Personal website #[span.userinfo__occ web developer]
            .userinfo__name Mount
        .hero__downbutton
          .scroll-down
            a(href="").scroll-down__btn Scroll

    section(ref="about").about&attributes({'data-section-id': 'about'})
      .container
        .about__columns
          .about__user
            .user
              .user__avatar
                .user__avatar-wrapper
                  images-comp(
                    :path="'content/user.jpg'"
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
    section(ref="skills").values&attributes({'data-section-id': 'skills'})
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
  
    section(ref="works").works&attributes({'data-section-id': 'works'})
      .container.works__container
        .section-title.works__section-title My works
        .works__content
          works-comp
          
  .triangles.triangles_bottom
    svg(viewBox="0 0 1000 100" preserveAspectRatio="none").triangles__shape.triangles__shape_left
      polygon(points="0,0 1000,0 1000,100")
    svg(viewBox="0 0 1000 100" preserveAspectRatio="none").triangles__shape.triangles__shape_right
      polygon(points="0,0 0,100 1000,0")
  section(ref="reviews").contacts&attributes({'data-section-id': 'reviews'})
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
        menu-comp(
          :menuLinks="menuLinks"
          @scroll-to="scrollTosection"
        ).menu--color-white.footer__data-menu
        .footer__data-content
          .footer__data-col
            .footer__data-text
              p Этот сайт я сделал в рамках обучения в Школе онлайн образования Loftschool
            .footer__data-socials
              socials-comp(
                :socials="socials"
              ).socials--round-borders
          .footer__data-col
            .text-quote
              .text-quote__text
                p Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает где вы живете 
              .text-quote__author Martin Golding
</template>

<script>
import images from "./components/images-app";
import hamburger from "./components/hamburger-btn"  
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
    reviewsComp: reviewsComponent
  },
  props: {
    menuLinks: Array,
    socials: Array
  },
  methods: {
    scrollTosection(attr) {
      const elem = this.$refs[attr];
      
      let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight
      console.log(elem.offsetTop);

      // window.scrollTo({
      //   top: elem.offsetTop,
      //   left: 0,
      //   behavior: "smooth",
      // });
    },
  }
}
</script>

<style lang="postcss">
@import "./styles/main.pcss"
</style>