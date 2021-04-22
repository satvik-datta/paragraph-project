function getpara1() {
    var display_student_array = [];

    for (let index = 1; index <= 8; index++) {
        var student_name = document.getElementById("name_of_the_student_" + index).value;
        console.log(student_name);
        name_array.push(student_name);
    }
    console.log(name_array);
    var student_array_length = name_array.length;
    console.log(student_array_length);

    for (let i = 0; i < student_array_length; i++) {
        display_student_array.push("<h4>NAME - " + name_array[i] + "</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}


function getpara2() {
    var display_student_array = [];

    for (let index = 1; index <= 8; index++) {
        var student_name = document.getElementById("name_of_the_student_" + index).value;
        console.log(student_name);
        name_array.push(student_name);
    }
    console.log(name_array);
    var student_array_length = name_array.length;
    console.log(student_array_length);

    for (let i = 0; i < student_array_length; i++) {
        display_student_array.push("<h4>NAME - " + name_array[i] + "</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}