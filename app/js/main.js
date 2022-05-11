(document).ready(function() {

    const $nav = ('.nav'),
        $menu = ('.main__nav'),
        $menuItem = ('.menu__item'),
        $hamburger = ('.hamburger');
    ('.products__menu__link').click(function () {

        const curProdId = this.id;
        const curProdCategory = ('.products__block #' + curProdId);

        ('.products__block__item').not(curProdCategory).hide(0);
        curProdCategory.show(0);

        ('.products__menu__link').not(('#' + curProdId)).removeClass('products__menu__link_active');

        (this).addClass('products__menu__link_active');
    });

    ('#products__all').click(function () {
        ('.products__block__item').show();
    });
});