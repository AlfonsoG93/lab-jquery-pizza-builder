// Write your Pizza Builder JavaScript in this file.
var  totalPrice ;
$(document).ready(function(){

$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    
});
$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    
});

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.btn-mushroom').toggleClass('active');
});

$('.sauce').removeClass('sauce-white');
$('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.sauce').toggleClass('active');
});

$('.crust').removeClass('crust-gluten-free');
$('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
});

});