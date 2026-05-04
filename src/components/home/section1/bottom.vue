<template>

    <div
        class="h-[9%] max-w-full uppercase text-[10px]   xs:text-[12px] sm:text-[13px]  md:text-[16px] lg:text-lg  font-semibold bg-black text-white border-b border-gray-300 flex items-center justify-around relative overflow-hidden container">
        <p style="--postion:1">g_shock</p>
        <p style="--postion:2">casio/<span class="capitalize">vintage</span></p>
        <p style="--postion:3">edifice</p>
        <p style="--postion:4">oceanus</p>
        <p style="--postion:5">pro_trek</p>
        <p style="--postion:6">baby_g</p>
        <p style="--postion:7">mr_g</p>
    </div>

</template>

<style scoped>
p {
    position: absolute;
    left: 100%;
    animation: autoRun 15s linear infinite;
    animation-delay: calc((15s/7)*(var(--postion) - 1));
    cursor: pointer;
    transition: scale 0.4s;
    object-fit: contain;


}

p:hover {
    scale: 1.1;
}



.container:hover p {
    animation-play-state: paused;
}


@media (min-width:0) {
    .ups {
        height: 50px;
    }

    .dpd {
        height: 50px;
    }

    .ebay {
        height: 35px;
    }
}


@keyframes autoRun {
    from {
        left: 100%;
    }

    to {
        left: -100%;
    }
}
</style>