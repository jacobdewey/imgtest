
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace ImgLibraryAddOn {







    /** 
     * TODO: describe your function here
     * value describe value here, eg: 5
     */

    export function showImageHand(x: number): void {

        images.createImage(`
. # # . .
. # # # .
. # # # #
# # # # #
# # # # #
`).showImage(0)

        basic.pause((x * 1000) - 400)



        basic.clearScreen()
    }

    export function showImageWait(x: number): void {


        basic.pause((x * 1000) - 400)


        basic.clearScreen()
    }

    export function showImageGrid(x: number): void {



        images.createImage(`
. # . # .
# # # # #
. # . # .
# # # # #
. # . # .
`).showImage(0)


        ImageAddOns.showImageWait(x)
    }

    export function showImageSmilyFace(x: number): void {

        images.createImage(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .
`).showImage(0)
        ImageAddOns.showImageWait(x)
    }

    export function showImageFrowningFace(x: number): void {


        images.createImage(`
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #
`).showImage(0)
        ImageAddOns.showImageWait(x)
    }




    //% block
    export function imageIcons(x: ImageIconAddOns, n: number): void {
        switch (x) {
            case ImageIconAddOns.SmileyFace:

                ImageAddOns.showImageSmilyFace(n)
                break
            case ImageIconAddOns.FrowningFace:

                ImageAddOns.showImageFrowningFace(n)
                break
            case ImageIconAddOns.Hand:


                ImageAddOns.showImageHand(n)
                break
            case ImageIconAddOns.grid:


                ImageAddOns.showImageGrid(n)
                break
            case ImageIconAddOns.Dice1:


                ImageAddOns.showImageDice1(n)
                break
            case ImageIconAddOns.Dice2:


                ImageAddOns.showImageDice2(n)
                break
            case ImageIconAddOns.Dice3:


                ImageAddOns.showImageDice3(n)
                break
            case ImageIconAddOns.Dice4:


                ImageAddOns.showImageDice4(n)
                break
            case ImageIconAddOns.Dice5:


                ImageAddOns.showImageDice5(n)
                break
            case ImageIconAddOns.Dice6:

                ImageAddOns.showImageDice6(n)
                break

        }
    }



    //% block

    export function imageIconsCircle(x: ImageIconAddOns): Image {
        switch (x) {
            case ImageIconAddOns.FrowningFace:
                return images.createImage(`
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #
`)
            case ImageIconAddOns.grid:
                return images.createImage(`
. # . # .
# # # # #
. # . # .
# # # # #
. # . # .
`)
            case ImageIconAddOns.Hand:
                return images.createImage(`
. # # . .
. # # # .
. # # # #
# # # # #
# # # # #
`)
            case ImageIconAddOns.SmileyFace:
                return images.createImage(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .
`)
            case ImageIconAddOns.Dice1:
                return images.createImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
            case ImageIconAddOns.Dice2:
                return images.createImage(`
# . . . .
. . . . .
. . . . .
. . . . .
. . . . #
`)
            case ImageIconAddOns.Dice3:
                return images.createImage(`
. . . . #
. . . . .
. . # . .
. . . . .
# . . . .
`)
            case ImageIconAddOns.Dice4:
                return images.createImage(`
# . . . #
. . . . .
. . . . .
. . . . .
# . . . #
`)
            case ImageIconAddOns.Dice5:
                return images.createImage(`
# . . . #
. . . . .
. . # . .
. . . . .
# . . . #
`)
            case ImageIconAddOns.Dice6:
                return images.createImage(`
# . . . #
. . . . .
# . . . #
. . . . .
# . . . #
`)

        }


    }



    export function scrollImageBone(z: number, n: number, x: number): void {

        images.createBigImage(`
. . . . . . . . . .
# # . . . . . . # #
# # # # # # # # # #
# # . . . . . . # #
. . . . . . . . . .
`).scrollImage(n, x)


        ImageAddOns.showImageWait(z)
    }

    export function scrollImagePants(z: number, n: number, x: number): void {

        images.createBigImage(`
# # # # # # # # # # 
# # # # # # # # # #
. . . . . . . # # #
# # # # # # # # # #
# # # # # # # # # #
`).scrollImage(n, x)

        ImageAddOns.showImageWait(z)

    }

    export function scrollImageShorts(z: number, n: number, x: number): void {

        images.createBigImage(`

# # # # # # #
# # # # # # #
. . . . # # #
# # # # # # # 
# # # # # # #
`).scrollImage(n, x)

        ImageAddOns.showImageWait(z)


    }

    export function showImageDice6(n: number): void {

        images.createImage(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
`).showImage(0)

        ImageAddOns.showImageWait(n)
    }




    export function showImageDice5(n: number): void {


        images.createImage(`
# . . . #
. . . . .
. . # . .
. . . . .
# . . . #
`).showImage(0)

        ImageAddOns.showImageWait(n)
    }


    export function showImageDice4(n: number): void {


        images.createImage(`
# . . . #
. . . . .
. . . . .
. . . . .
# . . . #
`).showImage(0)
        ImageAddOns.showImageWait(n)
    }

    export function showImageDice3(n: number): void {


        images.createImage(`
. . . . #
. . . . .
. . # . .
. . . . .
# . . . .
`).showImage(0)
        ImageAddOns.showImageWait(n)
    }

    export function showImageDice2(n: number): void {

        images.createImage(`
# . . . .
. . . . .
. . . . .
. . . . .
. . . . #
`).showImage(0)

        ImageAddOns.showImageWait(n)
    }

    export function showImageDice1(n: number): void {


        images.createImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`).showImage(0)

        ImageAddOns.showImageWait(n)
    }

    export function scrollImageStairCase(z: number, n: number, x: number): void {


        images.createImage(`
# # . . . . . . . .
# # # # . . . . . .
# # # # # # . . . .
# # # # # # # # . .
# # # # # # # # # #
`).scrollImage(n, x)
        ImageAddOns.showImageWait(z)

    }

    export function scrollImagePerson(z: number, n: number, x: number): void {


        images.createBigImage(`
# # # # # # # # # # # # # # # . # # # # # # # # # . . . . . . # . . . . 
# # # # # # # # # # # # # # # . # # # # # # # # # # # # # . # . . . # . 
. . . . . . . . . . # # # # # . # # # # # # # # # # # # # . # . . . . . 
# # # # # # # # # # # # # # # . # # # # # # # # # # # # # . # . . . # . 
# # # # # # # # # # # # # # # . # # # # # # # # # . . . . . . # . . . . 
`).scrollImage(n, x)

        ImageAddOns.showImageWait(z)
    }

    //% block
    export function scrollImageIcons(z: number, n: number, x: number, y: scrollImageIconAddOns): void {
        switch (y) {
            case scrollImageIconAddOns.pants:


                ImageAddOns.scrollImagePants(z, n, x)
                break
            case scrollImageIconAddOns.person:

                ImageAddOns.scrollImagePerson(z, n, x)
                break
            case scrollImageIconAddOns.StairCase:

                ImageAddOns.scrollImageStairCase(z, n, x)
                break
            case scrollImageIconAddOns.shorts:

                ImageAddOns.scrollImageShorts(z, n, x)
                break
            case scrollImageIconAddOns.bone:
                ImageAddOns.scrollImageBone(z, n, x)
                break




        }
    }
    //% block
    export function BigImageIconCircle(y: scrollImageIconAddOns): Image {
        switch (y) {
            case scrollImageIconAddOns.shorts:
                return images.createImage(`
# # # # # # #
# # # # # # #
. . . . # # #
# # # # # # #
# # # # # # #
`);
            case scrollImageIconAddOns.pants:
                return images.createImage(`
# # # # # # # # # #
# # # # # # # # # #
. . . . . . . # # #
# # # # # # # # # #
# # # # # # # # # #
`);
            case scrollImageIconAddOns.StairCase:
                return images.createImage(`
# # . . . . . . . .
# # # # . . . . . .
# # # # # # . . . .
# # # # # # # # . .
# # # # # # # # # #
`);
            case scrollImageIconAddOns.person:
                return images.createImage(`
# # # # # # # # # # # # # # # . # # # # # # . . . . . . # . . . .
# # # # # # # # # # # # # # # . # # # # # # # # # # . # . . . # .
. . . . . . . . . . # # # # # . # # # # # # # # # # . # . . . . . 
# # # # # # # # # # # # # # # . # # # # # # # # # # . # . . . # .
# # # # # # # # # # # # # # # . # # # # # # . . . . . . # . . . .
`);
            case scrollImageIconAddOns.bone:
                return images.createImage(`
. . . . . . . . . .
# # . . . . . . # #
# # # # # # # # # #
# # . . . . . . # #
. . . . . . . . . . 
`)




        }
    }








































}



enum ImageIconAddOns {
    //% block="hand"
    Hand,
    //% block="grid"
    grid,
    //% block="SmileyFace"
    SmileyFace,
    //% block="FrowningFace"
    FrowningFace,
    //% block="Dice1"
    Dice1,
    //% block="Dice2"
    Dice2,
    //% block="Dice3"
    Dice3,
    //% block="Dice4"
    Dice4,
    //% block="Dice5"
    Dice5,
    //% block="Dice6"
    Dice6
}


enum scrollImageIconAddOns {
    //% block="person"
    person,
    //% block="StairCase"
    StairCase,
    //% block="shorts"
    shorts,
    //% block="pants"
    pants,
    //% block="bone"
    bone
}




enum image {
    //% block="on"
    on,
    //% block="off"
    off

}
