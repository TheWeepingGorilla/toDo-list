$(document).ready(function() {

  $("form#add-list").submit(function(event) {
    event.preventDefault();
    var inputtedListName = $("input#new-list").val();
    var newList = { listName: inputtedListName, tasks:[] };
    var listArray = [];
    $("ul#added-List").append("<li><span class='displayedList'>" + newList.listName + "</span></li>");
    $("input#new-list").val("");

    $("ul#added-List").children('li').last().click(function() {

      $("span#list-name").empty();
      $("#task-name").empty();
      $("#task-content").empty();
      newList.tasks.forEach(function(task) {
        $("#task-content").append("<li><span class='displayedTask'>" + task.description +
          "</span></li>");
      });
      $("#task-name").append(newList.listName);
      $("form#add-task").unbind("submit");

      $("form#add-task").submit(function(event) {

        event.preventDefault();
        var inputtedDescription = $("input#new-task").val();
        var newTask = { description: inputtedDescription };
        newList.tasks.push(newTask);
        $("ul#task-content").append("<li><span class='displayedTask'>" + newTask.description + "</span></li>");
        $("input#new-task").val("");
        $("ul#task-content").children('li').last().click(function() {
          $("span#displayedTask").empty();
          $("#task-content").empty();
          $("#task-name").append(newTask.tasks);
        });
      });
    });
  });
});




