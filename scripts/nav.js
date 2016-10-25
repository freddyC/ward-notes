
MyWard.Nav = (function () {
"use strict";

console.log('wywywywy')
  var showing;
  var initers = {
    bishopric : function (id) {
      
    },
    wardCouncil : function () {

    },
    pec : function () {

    }
  }

  function show (id) {
    $('#' + id + Display).show();
  }

  function toggleMeetingType (id) {
    if (showing === id) return;
    showing = id;
    $('.meetingType').removeClass('selected');
    $('#' + id + 'Toggle').addClass('selected');
    $('.contentType').hide();
    $('#' + id + 'Display').show('slow');
    initers[id]();
  }

  return {
    toggleMeetingType : toggleMeetingType
  }

}());