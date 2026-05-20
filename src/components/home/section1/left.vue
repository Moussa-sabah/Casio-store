<template>

    <div class="w-[50%] flex    container  px-5 sm:px-10 lg:px-15">
        <div class="w-full flex flex-col gap-3  xs:gap-5 md:gap-7  xl:gap-10  items-start">
            <h1 class="text-2xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold md:font-semibold md:leading-10 lg:leading-15 xl:leading-20 relative title flex flex-col gap-px md:gap-5 ">
               Your Style,
               <p> Your Time</p>
            </h1>
            <p class=" text-xs  md:text-[15px] lg:text-lg font-medium relative text">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do
                eiusmod asdfasddf asdf </p>
            <button
                class="text-white transition-all duration-500 bg-black  text-[11px]  sm:text-[13px] py-1 px-3 w-20  sm:w-22 md:text-[16px] md:py-2 md:px-5 md:w-30 font-semibold relative flex items-center   btn">
                Shop Now
                <span class="material-symbols-outlined arrowIcon absolute -left-full scale-0 ">
                    arrow_right_alt
                </span>
            </button>
        </div>
    </div>

</template>


<style scoped>
.title {
    animation: fromLeft 1s linear;
}

.text {
    animation: fromLeft 1.1s linear;
}


.btn {
    animation: fromLeft 1.2s linear;
}







.arrowIcon {
    transition: all 0.5s;
}

.btn:hover .arrowIcon {
    left: 75%;
    scale: 1;

}



@media (width>=0px) {
    .arrowIcon{
        font-size: 18px;
    }
    .btn:hover {
        width: 90px;
    }

}

@media (width>=500px) {
    .arrowIcon{
        font-size: 20px;
    }
    .btn:hover {
        width: 100px;
    }

}

@media (width>=640px) {
    .arrowIcon{
        font-size: 22px;
    }
    .btn:hover {
        width: 130px;
    }

}

@media (width>=768px) {
    .arrowIcon{
        font-size: 25px;
    }
    .btn:hover {
        width: 160px;
    }

}

/* @media (width<768px) {

    .arrowIcon {
        font-size: 22px;
    }

    .btn:hover {
        width: 120px;
    }

}

@media (width<768px) {

    .arrowIcon {
        font-size: 22px;
    }

    .btn:hover {
        width: 120px;
    }

} */



@keyframes fromLeft {
    from {
        left: -100%;
        opacity: 0;
    }

    to {
        left: 0;
        opacity: 1;
    }
}
</style>