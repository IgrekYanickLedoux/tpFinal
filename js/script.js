/*( ".img" ).mouseenter(function() {
    $(this).css('cursor','pointer');
})*/

$("<p>").hover(function(){
    $('<p>').html('color', "rgba(35, 31, 32, 1)");
});

$( "#QuebecWushu" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image1').attr('src', "img/1_QuebecWushu_Crop_Dark.jpg")
    $('#QuebecWushu .texteInvisible').css('display', "block")
})

$( "#QuebecWushu" ).mouseleave(function() {
    $('#image1').attr('src', "img/1_QuebecWushu_Crop.jpg")
    $('#QuebecWushu .texteInvisible').css('display', "none")
})

$( "#Amalgame" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image2').attr('src', "img/2_Amalgame_Crop_Dark.jpg")
    $('#Amalgame .texteInvisible').css('display', "block")
})

$( "#Amalgame" ).mouseleave(function() {
    $('#image2').attr('src', "img/2_Amalgame_Crop.jpg")
    $('#Amalgame .texteInvisible').css('display', "none")
})


$( "#BistroBlu" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image3').attr('src', "img/3_BistroBlu_Crop_Dark.jpg")
    $('#BistroBlu .texteInvisible').css('display', "block")
})

$( "#BistroBlu" ).mouseleave(function() {
    $('#image3').attr('src', "img/3_BistroBlu_Crop.jpg")
    $('#BistroBlu .texteInvisible').css('display', "none")
})


$( "#Hexagone" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image4').attr('src', "img/4_Hexagone_Crop_Dark.jpg")
    $('#Hexagone .texteInvisible').css('display', "block")
})

$( "#Hexagone" ).mouseleave(function() {
    $('#image4').attr('src', "img/4_Hexagone_Crop.jpg")
    $('#Hexagone .texteInvisible').css('display', "none")
})


$( "#Ketolat" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image5').attr('src', "img/5_Ketolat_Crop_Dark.jpg")
    $('#Ketolat .texteInvisible').css('display', "block")
})

$( "#Ketolat" ).mouseleave(function() {
    $('#image5').attr('src', "img/5_Ketolat_Crop.jpg")
    $('#Ketolat .texteInvisible').css('display', "none")
})

$( "#CyberMonday" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image6').attr('src', "img/6_CyberMonday_Crop_Dark.jpg")
    $('#CyberMonday .texteInvisible').css('display', "block")
})

$( "#CyberMonday" ).mouseleave(function() {
    $('#image6').attr('src', "img/6_CyberMonday_Crop.jpg")
    $('#CyberMonday .texteInvisible').css('display', "none")
})

$( "#SprintFinal" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image7').attr('src', "img/7_SprintFinal_Crop_Dark.jpg")
    $('#SprintFinal .texteInvisible').css('display', "block")
})

$( "#SprintFinal" ).mouseleave(function() {
    $('#image7').attr('src', "img/7_SprintFinal_Crop.jpg")
    $('#SprintFinal .texteInvisible').css('display', "none")
})


$( "#PhilippeLessard" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image8').attr('src', "img/8_PhilippeLessard_Crop_Dark.jpg")
    $('#PhilippeLessard .texteInvisible').css('display', "block")
})

$( "#PhilippeLessard" ).mouseleave(function() {
    //$(this).css('cursor','pointer');
    $('#image8').attr('src', "img/8_PhilippeLessard_Crop.jpg")
    $('#PhilippeLessard .texteInvisible').css('display', "none")
})

/*------------- << JARDINS LA BROUETTE >> ------------------------------------------------------------------*/

$( "#JardinsBrouette" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image9').attr('src', "img/9_JardinsBrouette_Crop_Dark.jpg")
    $('#JardinsBrouette .texteInvisible').css('display', "block")
})

$( "#JardinsBrouette" ).mouseleave(function() {
    $('#image9').attr('src', "img/9_JardinsBrouette_Crop.jpg")
    $('#JardinsBrouette .texteInvisible').css('display', "none")
})

/*------------- << LIZANE SENECAL >> ------------------------------------------------------------------*/

$( "#LizaneSenecal" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image10').attr('src', "img/10_LizaneSenecal_Crop_Dark.jpg")
    $('#LizaneSenecal .texteInvisible').css('display', "block")
})

$( "#LizaneSenecal" ).mouseleave(function() {
    $('#image10').attr('src', "img/10_LizaneSenecal_Crop.jpg")
    $('#LizaneSenecal .texteInvisible').css('display', "none")
})

/*------------- << L'EAU-THENTIQUE >> ------------------------------------------------------------------*/

$( "#EauThentique" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image11').attr('src', "img/11_EauThentique_Crop_Dark.jpg")
    $('#EauThentique .texteInvisible').css('display', "block")
})

$( "#EauThentique" ).mouseleave(function() {
    $('#image11').attr('src', "img/11_EauThentique_Crop.jpg")
    $('#EauThentique .texteInvisible').css('display', "none")
})

/*------------- << ASSUTRE-PRÊT >> ------------------------------------------------------------------*/

$( "#AssurePret" ).mouseenter(function() {
    $(this).css('cursor','pointer');
    $('#image12').attr('src', "img/12_AssurePret_Crop_Dark.jpg")
    $('#AssurePret .texteInvisible').css('display', "block")
})

$( "#AssurePret" ).mouseleave(function() {
    $('#image12').attr('src', "img/12_AssurePret_Crop.jpg")
    $('#AssurePret .texteInvisible').css('display', "none")
})


$("#up").mouseenter(function () {
    $(this).css('cursor','pointer');
    $('#up .texteInvisible').css('display', "block")
    $('#up .texteVisible').css('display', "none")
})

$("#up").mouseleave(function () {
    $(this).css('cursor','pointer');
    $('#up .texteInvisible').css('display', "none")
    $('#up .texteVisible').css('display', "block")
})

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})