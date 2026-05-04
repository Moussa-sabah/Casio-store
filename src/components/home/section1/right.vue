<template>

    <div class=" w-[58%]  h-full  relative  overflow-hidden flex items-center justify-center">

        <h1
            class=" absolute   bottom-27  md:bottom-41 lg:bottom-47 text-white  text-[65px]  md:text-[100px] lg:text-[115px] font-bold -left-33.5 xs:-left-34 md:-left-53 lg:-left-61 unlimate">
            ULTIMATE
        </h1>

        <div class=" relative  flex flex-col items-center justify-center ">
            <div class="flex gap-2 md:gap-5">
                <img src="../../../../public/images/image (1).avif"
                    class="object-cover h-40 w-25 xs:h-50 xs:w-31 sm:h-55 sm:w-35  md:h-80 md:w-50   lg:h-100  lg:w-65 relative image1 rotate-10 ">
                <img src="../../../../public/images/image (2).avif"
                    class="object-cover h-32  w-19 xs:h-40 xs:w-23 sm:h-45 sm:w-26 md:h-60 md:w-35  lg:h-80  lg:w-46  relative -rotate-10 image2  ">
            </div>
            <p class="font-semibold text-sm  md:text-2xl relative name  mt-5 mb-1 xs:mb-0 md:mt-10">Trendy Slick Pro</p>
            <p class="text-xs font-bold sm:text-sm md:text-lg  relative  price ">₹ 3999.00</p>
        </div>


    </div>

</template>


<style scoped>
.unlimate {

    animation: unlimateAnim 1s linear forwards;

}


.image1 {
    animation: image1Anim 1s linear;
    transition: rotate 0.5s;
}

.image2 {
    animation: image2Anim 1.1s linear;
    transition: rotate 0.5s;
}

.image1:hover,
.image2:hover {
    rotate: 0deg;
}


.name {
    animation: fromRight 1.2s linear;
}

.price {
    animation: fromRight 1.3s linear;
}

@keyframes unlimateAnim {
    from {
        rotate: 0deg;
        opacity: 0;
        scale: 0;
    }

    to {
        rotate: -90deg;
        opacity: 1;
        scale: 1;
    }
}

@keyframes fromRight {
    from {
        left: 100%;
        opacity: 0;
    }

    to {
        left: 0;
        opacity: 1;
    }
}

@keyframes image1Anim {
    from {
        rotate: 0deg;
        left: 100%;
        opacity: 0;
    }

    to {
        rotate: 10deg;
        left: 0;
        opacity: 1;
    }
}

@keyframes image2Anim {
    from {
        rotate: 0deg;
        left: 100%;
        opacity: 0;
    }

    to {
        rotate: -10deg;
        left: 0;
        opacity: 1;
    }
}
</style>