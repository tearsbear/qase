$(document).ready(function () {
  const dataFunc = [
    {
      description: "Dark Mode toggle should change the website themes",
      step: "toggle the dark mode button on the top of navbar",
      result:
        "website themes should change to dark or light based on the toggle click",
    },
    {
      description: "Subscribe button of podcast will show popup subscribed",
      step: "click the button subscribed from the selected podcast",
      result:
        "after click and the popup show, the podcast will be added to the user subscribed podcasts list. Also the button will change to unsubscribe ",
    },
    {
      description: "Unsubscribe button of podcast will show popup unsubscribed",
      step: "click the button unsubscribed from the selected podcast",
      result:
        "after click and the popup show, the podcast will be removed from the user subscribed podcasts list. Also the button will change to subscribe ",
    },
    {
      description:
        "Play button of selected podcast will play the latest episode",
      step: "click the button play from the selected podcast",
      result:
        "the text button will change to now playing and media player will play the first episode from selected podcast",
    },
    {
      description:
        "Pause button of media player(mini) will pause the current played episode",
      step: "click the button pause from media player (mini)",
      result:
        "it will pause the current played episode and the button will change to play",
    },
    {
      description: "Media player will change to fullscreen when is clicked",
      step: "click the media player on the top of bottom navigation",
      result: "It will show the transition to fullscreen for media player",
    },
    {
      description:
        "Play button of media player(fullsceen) will play the current episode",
      step: "click the button play from media player (fullscreen)",
      result:
        "it will play the current episode and the button will change to pause",
    },
    {
      description:
        "Media player(fullsceen) advanced button will move forward 10 seconds",
      step: "click the advanced button on the right side of play/pause button",
      result: "it will move forward to 10 seconds from the current duration",
    },
    {
      description:
        "Media player(fullsceen) rewind button will move back to 10 seconds",
      step: "click the rewind button on the left side of play/pause button",
      result: "it will rewind to 10 seconds from the current duration",
    },
    {
      description:
        "Duration slider of media player will change the current duration based on the position",
      step: "slide right or left on duration slider of media player",
      result: "it will rewind to 10 seconds from the current duration",
    },
    {
      description:
        "Love outline button in media player(fullscreen) will added the selected episode to library",
      step: "click the love outline icon in media player(fullscreen)",
      result:
        "after click and the popup show, the played episode will be added to the user library and the icon style will change to filled",
    },
    {
      description:
        "Love filled button in media player(fullscreen) will removed the selected episode from library",
      step: "click the love filled icon in media player(fullscreen)",
      result:
        "after click and the popup show, the played episode will be removed from the user library and the icon style will change to outline",
    },
    {
      description:
        "Play button on the list episode in podcast will played the selected episode",
      step: "choose the episode from list episode of podcast and then click the play button",
      result:
        "it will play the selected episode on media player and the button will change to pause",
    },
    {
      description:
        "Play button on the list episode in home page will played the selected episode",
      step: "choose the episode from list in home page and then click the play button",
      result:
        "it will play the selected episode on media player and the button will change to pause",
    },
    {
      description:
        "Pause button on the list episode in home page will paused the selected episode",
      step: "click the pause button from selected episode on list from home page",
      result:
        "it will pause the selected episode on media player and the button will change to play",
    },
    {
      description:
        "(Desktop) Share Button on podcast will show popover with list option to share",
      step: "click the icon share on the right side of navbar ",
      result:
        "it will show the list option to share on facebook, twitter or copy link",
    },
    {
      description:
        "(Mobile) Share Button on podcast will show native option of mobile devices to share",
      step: "click the icon share on the right side of navbar ",
      result: "it will show the native option of mobile devices to share",
    },
    {
      description:
        "(Desktop) Twitter share on podcast will redirect to twitter website to post a status",
      step: "click the icon share on the right side of navbar and choose twitter",
      result:
        "it will redirect to twitter website and prompt user to login first. If user already login, it will automatically fill the textarea post with title, links and hastags of selected podcast",
    },
    {
      description:
        "(Desktop) Facebook share on podcast will redirect to facebook website to post a status",
      step: "click the icon share on the right side of navbar and choose facebook",
      result:
        "it will redirect to facebook website and prompt user to login first. If user already login, it will automatically fill the textarea post with title, links and hastags of selected podcast",
    },
    {
      description:
        "(Desktop) Copy link to share on podcast will copy the redirect link of selected podcast",
      step: "click the icon share on the right side of navbar and choose copy link",
      result:
        "it will show the alert 'Link copied' and automatically copy the selected podcast redirect link and title (example: https://podcast.kbrprime.id/w3lkvyg)",
    },
    {
      description:
        "(Desktop) Action Sheet on list of each episode podcast will show when clicked",
      step: "choose the episode from list episode of podcast and then click the vertical dots icon",
      result:
        "it will show the action sheet of list button (Add to playlist, Download, Share, Details)",
    },
    {
      description:
        "(Desktop) Clicking the share button on Action Sheet of selected episode podcast will show the list of option to share",
      step: "click vertical dots icon from selected episode to show the action sheet, then choose share",
      result:
        "it will show the list option button to share (facebook, twitter, embed, copy link) that include redirect link and title of selected episode (example: https://podcast.kbrprime.id/hztgm5j)",
    },
    {
      description:
        "Clicking the add to playlist button on Action Sheet of selected episode podcast, the episode will be added to playlist",
      step: "click vertical dots icon from selected episode to show the action sheet, then choose add to playlist",
      result:
        "it will show the alert popup and the selected episode will be added to user playlist",
    },
    {
      description:
        "Clicking the download button on Action Sheet of selected episode podcast, the episode will be added to user downloaded list",
      step: "click vertical dots icon from selected episode to show the action sheet, then choose download -> click ok on alert dialog",
      result:
        "it will show alert and progress dialog to download. Also the selected episode will be added to user's download list",
    },
    {
      description:
        "Clicking the details button on Action Sheet of selected episode podcast will show the details of podcast",
      step: "click vertical dots icon from selected episode to show the action sheet, then choose details",
      result:
        "it will open the details page that shows the information about selected podcast",
    },
    {
      description:
        "Minus button on list item of playlist will removed the selected episode from user's playlist",
      step: "on playlist page click the minus icon of list episode",
      result:
        "it will show popup alert and the selected episode will be removed from user's playlist",
    },
    {
      description:
        "When playing from playlist, the next button on media player(mini) will playing the next episode from playlist",
      step: "play the episode from playlist, then click the forward icon",
      result:
        "media player should skip the current episode and will play the next episode from user's playlist",
    },
    {
      description:
        "When playing from playlist, the previous button on media player(mini) will playing the previous episode from playlist",
      step: "play the last episode from playlist, then click the previous icon",
      result:
        "media player should skip the current episode and will play the previous episode from user's playlist",
    },
    {
      description:
        "Clicking the list episode from podcast will automatically play the selected episode",
      step: "on list episode of podcast, click the episode",
      result: "it will play the selected episode on media player",
    },
    {
      description:
        "Minus button on list item of download will removed the selected episode from user's download",
      step: "on playlist page choose downloaded podcast, then click the minus icon of list episode",
      result:
        "it will show popup alert and the selected episode will be removed from user's download",
    },
    {
      description:
        "Clicking the thumbnail image of podcast or episode will be redirect to podcast details",
      step: "on home page, click the thumbnail image of podcast or episode",
      result: "it should be redirect to selected podcast details page",
    },
    {
      description: "Data Saver toggle should change the website audio quality",
      step: "on profile page, choose data saver then toggle data saver button slider",
      result: "it should change the website audio quality to low or high",
    },
    {
      description:
        "Name on register field should only contains character without numbers",
      step: "on pofile page, choose 'Akun' then fill the name field with numbers",
      result: "it should alert error to prompt user that name contains numbers",
    },
    {
      description:
        "Name on register field should only contains character without special character",
      step: "on pofile page, choose 'Akun' then fill the name field with special characters",
      result:
        "it should alert error to prompt user that name contains special characters",
    },
    {
      description:
        "Value gender of select option on register will change based on user selected value",
      step: "on pofile page, choose 'Akun' then click the gender field",
      result:
        "it should show the list option of gender and change based on selected value",
    },
    {
      description: "Email field on register must be a valid email format",
      step: "on pofile page, choose 'Akun' then fill the email field without @ or subdomain of email provider",
      result:
        "it should alert error to prompt user that the value is not a valid email",
    },
    {
      description: "Phone field on register should only accept numbers input",
      step: "on pofile page, choose 'Akun' then fill the phone field with characters",
      result:
        "it should alert error to prompt user that phone contains characters",
    },
    {
      description: "Length of phone input shoudl greater than 10",
      step: "on pofile page, choose 'Akun' then fill the phone field with value that have a length below 11",
      result:
        "it should alert error to prompt user that phone input length should greater than 10",
    },
    {
      description: "Length of phone input shoudl not greater than 12",
      step: "on pofile page, choose 'Akun' then fill the phone field with value that have a length above 12",
      result:
        "it should alert error to prompt user that phone input length should not greater than 12",
    },
    {
      description:
        "Minimum length of password input on register is 8 characters",
      step: "on pofile page, choose 'Akun' then fill the password field with value that have a length above 8",
      result:
        "it should alert error to prompt user that minimum length of password input is 8",
    },
    {
      description: "Register form can't be empty",
      step: "on pofile page, choose 'Akun' then leave one or all field with empty value",
      result:
        "after submit the form, it should alert error to prompt user that the field can't be empty",
    },
    {
      description: "Existing email can't be registered",
      step: "on profile page, choose 'Akun' then fill the email field with existing user's email",
      result:
        "after submit the form, it should alert error to prompt user that the email is already exist",
    },
    {
      description: "Existing phone number can't be registered",
      step: "on profile page, choose 'Akun' then fill the phone field with existing user's phone",
      result:
        "after submit the form, it should alert error to prompt user that the phone number is already exist",
    },
    {
      description: "Email field on login must be a valid email format",
      step: "on pofile page, choose the avatar image then fill the email field without @ or subdomain of email provider",
      result:
        "it should alert error to prompt user that the value is not a valid email",
    },
    {
      description: "Minimum length of password input on login is 8 characters",
      step: "on pofile page, choose the avatar image then fill the password field with value that have a length above 8",
      result:
        "it should alert error to prompt user that minimum length of password input is 8",
    },
    {
      description:
        "Submit a form login will check the email is existing or not",
      step: "on pofile page, choose the avatar image then fill the email field with not existing user's email",
      result:
        "after submit the form, it should alert error to prompt user that the account is not exist",
    },
    {
      description:
        "Submit a form login will check the password of email account is true or not",
      step: "on pofile page, choose the avatar image then fill the email field with existing user's email and random password",
      result:
        "after submit the form, it should alert error to prompt user that the password is wrong",
    },
  ];

  const dataUsab = [
    {
      description: "Swiper card for podcast, banner and episode works properly",
      step: "On home page swipe the card lof podcast, banner or episode to right or left",
      result:
        "the swiper works properly when user swipe to right or left without bug",
    },
    {
      description:
        "Search feature on page search should return the result perfectly	On page search click search field, then type episode or podcast keyword",
      step: "On page search click search field, then type episode or podcast keyword",
      result:
        "the user should see the result of episode or podcast if the keyword match the data",
    },
    {
      description:
        "Search feature on downloaded list should return the result perfectly",
      step: "On page playlist choose downloaded podcast, click search field, then type episode or podcast keyword",
      result:
        "the user should see the result of episode if the keyword match the data from the list downloaded",
    },
    {
      description:
        "Bottom navigation works properly to show the page based on selected tab",
      step: "Click on various tab of bottom navigatioin",
      result:
        "the user should see the page of each selected tab from bottom navigation",
    },
    {
      description:
        "Latest Episode on home page will show only latest episode from each podcast",
      step: "Navigate to home page, see the latest episode section",
      result:
        "the section should only show the latest episode from each podcast",
    },
    {
      description:
        "Stay Informed on home page will show only podcast from news category",
      step: "Navigate to home page, see the stay informed section",
      result: "the section should only show the podcast from news category",
    },
    {
      description:
        "New Release on home page will show only newest item from each podcast",
      step: "Navigate to home page, see the new release section",
      result: "the section should only show the newest item from each podcast",
    },
    {
      description:
        "Kabar Baru section on home page will show only list episode from Kabar Baru podcast",
      step: "Navigate to home page, see the Kabar Baru section",
      result:
        "the section should only show the episode from Kabar Baru podcast",
    },
    {
      description:
        "Editor's Choice section on home page will show only list podcast selected from Editor",
      step: "Navigate to home page, see the Editor's Choice section",
      result: "the section should only show the selected podcast from Editor",
    },
    {
      description:
        "When click list of category item, the page will redirect to category detail",
      step: "Navigate to home or search page, see the category section, then click some of the category",
      result:
        "User will be redirect to detail category page with the list of podcast based on selected category",
    },
    {
      description:
        "Subscribed podcast will show the list of podcast based on user subscribe",
      step: "Navigate to playlist page, choose subscribed podcast",
      result:
        "User will see the list of each podcast based on user's subscribe",
    },
    {
      description:
        "Downloaded podcast will show the list of episode based on user downloaded",
      step: "Navigate to playlist page, choose downloaded podcast",
      result:
        "User will see the list of each episode podcast that has been downloaded",
    },
    {
      description:
        "Playlist section will show the list of each episode that has been added ",
      step: "Navigate to playlist page, see the playlist section",
      result:
        "User will see the list of each episode podcast that has been added to playlist",
    },
    {
      description:
        "(Logged In) My Account page will show the detail account based on logged in user",
      step: "Navigate to profile page, choose 'Akun'",
      result: "User will see the detail of their account",
    },
    {
      description: "(Guest) My Account page will show the register form",
      step: "Navigate to profile page, choose 'Akun'",
      result:
        "User will see the register form because they are login as a guest",
    },
    {
      description: "Make Sure CTA Links (Terms & Condition) works properly",
      step: "Make Sure CTA Links (Terms & Condition) works properly	Navigate to profile page, choose 'About', click Terms & Condition button",
      result:
        "User will redirect to terms & condition page of kbrprime website",
    },
    {
      description: "Make Sure CTA Links (Privacy Policy) works properly",
      step: "Navigate to profile page, choose 'About', click Privacy Policy button",
      result: "User will redirect to privacy policy page of kbrprime website",
    },
    {
      description: "Make Sure CTA Links (Contact Email) works properly",
      step: "Navigate to profile page, choose 'About', click the email admin@kbrprime.id",
      result:
        "User will redirect to native email popup based on devices that will automatically fill the recipient email",
    },
    {
      description: "Ensure all the back or close button are working properly",
      step: "Click on various back or close button of page & popup",
      result: "The action will take user back to previous page or action",
    },
  ];

  const dataInt = [
    {
      description: "Grammar and Spelling on website not contains typo",
      step: "See the all element that contains text on the website",
      result: "Grammar and Spelling text on website doesn't contains typo",
    },
    {
      description:
        "UI for title text of list episode podcast should limited if the length was too long",
      step: "See the various episode of each podcast, then take a look at the title of episode",
      result:
        "Title of episode will be change to ... if it doesn't fit the content or the length was too long",
    },
    {
      description: "Dark theme does not contains a white or light background",
      step: "See the all the element of the website that conspicuous",
      result: "Website themes color already fulfilled the rules of Dark themes",
    },
    {
      description: "Ensure the font size of text element appropriate",
      step: "See the all element that contains text on the website",
      result: "All font size for text on website are appropriate",
    },
    {
      description: "Responsive design on desktop",
      step: "Open the website from desktop and look for the element and contents",
      result: "Website was fully support and responsive on desktop mode",
    },
    {
      description: "Theme color of website are not conspicuous",
      step: "See the all element that contains color on the website",
      result: "Theme color already appropriate",
    },
  ];

  var gaugef = app.gauge.create({
    el: ".gaugef",
  });

  var gauges = app.gauge.create({
    el: ".gauges",
  });

  var gaugeu = app.gauge.create({
    el: ".gaugeu",
  });

  let numIfn = 0;
  let numIfns = 0;
  let numis = 0;
  let numisns = 0;
  let numin = 0;
  let numint = 0;

  $("#totalfunc").text(dataFunc.length);
  $("#totalusab").text(dataUsab.length);
  $("#totalui").text(dataInt.length);

  for (let ifn = 0; ifn < dataFunc.length; ifn++) {
    let num = ifn + 1;
    let appendFunc = `<tr>
                            <td class="label-cell text-color-teal">${num}</td>
                            <td class="label-cell">
                             ${dataFunc[ifn].description}
                            </td>
                            <td class="label-cell">
                              ${dataFunc[ifn].step}
                            </td>
                            <td class="label-cell"> ${dataFunc[ifn].result}</td>
                            <td class="label-cell text-color-teal stat-${ifn}">

                              <div class="row rows-${ifn}">
                                <div class="col-50">
                                  <a
                                    id="fail-${ifn}"
                                    data-ref='${ifn}'
                                    style="margin-right: 15px; width: 50px; font-size: 10px !important"
                                    href="#"
                                    class="button button-fill bg-color-red"
                                    >Failed</a
                                  >
                                </div>
                                <div class="col-50">
                                  <a
                                    id="pass-${ifn}"
                                    data-ref='${ifn}'
                                    style="width: 50px; font-size: 10px !important"
                                    href="#"
                                    class="button button-fill bg-color-blue"
                                    >Passed</a
                                  >
                                </div>
                              </div>
                            </td>
                          </tr>`;
    $(appendFunc).appendTo("#listFunc");

    $(`#fail-${ifn}`).on("click", function () {
      let id = $(this).attr("data-ref");
      numIfns += 1;
      $("#numifn").text(`${numIfns} failed`);
      $(`.rows-${id}`).remove();
      $(`.stat-${id}`).removeClass("text-color-teal");
      $(`.stat-${id}`).addClass("text-color-red");
      $(`.stat-${id}`).text("Failed");
      let nds = numIfn + numIfns;
      let calc = (100 * nds) / dataFunc.length;

      gaugef.update({
        value: nds / dataFunc.length,
        valueText: Math.floor(calc) + "%",
      });
      if (nds == dataFunc.length) {
        $("#statm").removeClass("text-color-gray");
        $("#statm").addClass("text-color-teal");
        $("#statm").text("Complete");
      }
    });
    $(`#pass-${ifn}`).on("click", function () {
      let id = $(this).attr("data-ref");
      numIfn += 1;
      $("#numif").text(`${numIfn} passed`);
      $(`.rows-${id}`).remove();
      $(`.stat-${id}`).text("Passed");
      let nds = numIfn + numIfns;
      let calc = (100 * nds) / dataFunc.length;
      gaugef.update({
        value: nds / dataFunc.length,
        valueText: Math.floor(calc) + "%",
      });
      if (nds == dataFunc.length) {
        $("#statm").removeClass("text-color-gray");
        $("#statm").addClass("text-color-teal");
        $("#statm").text("Complete");
      }
    });

    // usability
  }
  for (let usb = 0; usb < dataUsab.length; usb++) {
    let nums = usb + 1;
    let appendFunc = `<tr>
                            <td class="label-cell text-color-teal">${nums}</td>
                            <td class="label-cell">
                             ${dataUsab[usb].description}
                            </td>
                            <td class="label-cell">
                              ${dataUsab[usb].step}
                            </td>
                            <td class="label-cell"> ${dataUsab[usb].result}</td>
                            <td class="label-cell text-color-teal stats-${usb}">

                              <div class="row rowsb-${usb}">
                                <div class="col-50">
                                  <a
                                    id="fails-${usb}"
                                    data-ref='${usb}'
                                    style="margin-right: 15px; width: 50px; font-size: 10px !important"
                                    href="#"
                                    class="button button-fill bg-color-red"
                                    >Failed</a
                                  >
                                </div>
                                <div class="col-50">
                                  <a
                                    id="passn-${usb}"
                                    data-ref='${usb}'
                                    style="width: 50px; font-size: 10px !important"
                                    href="#"
                                    class="button button-fill bg-color-blue"
                                    >Passed</a
                                  >
                                </div>
                              </div>
                            </td>
                          </tr>`;
    $(appendFunc).appendTo("#listusab");

    $(`#fails-${usb}`).on("click", function () {
      let id = $(this).attr("data-ref");
      numisns += 1;
      $("#numisn").text(`${numisns} failed`);
      $(`.rowsb-${id}`).remove();
      $(`.stats-${id}`).removeClass("text-color-teal");
      $(`.stats-${id}`).addClass("text-color-red");
      $(`.stats-${id}`).text("Failed");
      let nd = numis + numisns;
      let calc = (100 * nd) / dataUsab.length;

      gauges.update({
        value: nd / dataUsab.length,
        valueText: Math.floor(calc) + "%",
      });
      if (nd == dataUsab.length) {
        $("#statn").removeClass("text-color-gray");
        $("#statn").addClass("text-color-teal");
        $("#statn").text("Complete");
      }
    });
    $(`#passn-${usb}`).on("click", function () {
      let id = $(this).attr("data-ref");
      numis += 1;
      $("#numis").text(`${numis} passed`);
      $(`.rowsb-${id}`).remove();
      $(`.stats-${id}`).text("Passed");
      let nd = numis + numisns;
      let calc = (100 * nd) / dataUsab.length;
      gauges.update({
        value: nd / dataUsab.length,
        valueText: Math.floor(calc) + "%",
      });
      if (nd == dataUsab.length) {
        $("#statn").removeClass("text-color-gray");
        $("#statn").addClass("text-color-teal");
        $("#statn").text("Complete");
      }
    });
  }

  // ui

  for (let uin = 0; uin < dataInt.length; uin++) {
    let numi = uin + 1;
    let appendFunc = `<tr>
                            <td class="label-cell text-color-teal">${numi}</td>
                            <td class="label-cell">
                             ${dataInt[uin].description}
                            </td>
                            <td class="label-cell">
                              ${dataInt[uin].step}
                            </td>
                            <td class="label-cell"> ${dataInt[uin].result}</td>
                            <td class="label-cell text-color-teal statx-${uin}">

                              <div class="row rowsi-${uin}">
                                <div class="col-50">
                                  <a
                                    id="failis-${uin}"
                                    data-ref='${uin}'
                                    style="margin-right: 15px; width: 50px; font-size: 10px !important"
                                    href="#"
                                    class="button button-fill bg-color-red"
                                    >Failed</a
                                  >
                                </div>
                                <div class="col-50">
                                  <a
                                    id="pasi-${uin}"
                                    data-ref='${uin}'
                                    style="width: 50px; font-size: 10px !important"
                                    href="#"
                                    class="button button-fill bg-color-blue"
                                    >Passed</a
                                  >
                                </div>
                              </div>
                            </td>
                          </tr>`;
    $(appendFunc).appendTo("#listui");

    $(`#failis-${uin}`).on("click", function () {
      let id = $(this).attr("data-ref");
      numint += 1;
      $("#numint").text(`${numint} failed`);
      $(`.rowsi-${id}`).remove();
      $(`.statx-${id}`).removeClass("text-color-teal");
      $(`.statx-${id}`).addClass("text-color-red");
      $(`.statx-${id}`).text("Failed");
      let ndi = numin + numint;
      let calc = (100 * ndi) / dataInt.length;

      gaugeu.update({
        value: ndi / dataInt.length,
        valueText: Math.floor(calc) + "%",
      });
      if (ndi == dataInt.length) {
        $("#stati").removeClass("text-color-gray");
        $("#stati").addClass("text-color-teal");
        $("#stati").text("Complete");
      }
    });
    $(`#pasi-${uin}`).on("click", function () {
      let id = $(this).attr("data-ref");
      numin += 1;
      $("#numin").text(`${numin} passed`);
      $(`.rowsi-${id}`).remove();
      $(`.statx-${id}`).text("Passed");
      let ndi = numin + numint;
      let calc = (100 * ndi) / dataInt.length;
      gaugeu.update({
        value: ndi / dataInt.length,
        valueText: Math.floor(calc) + "%",
      });
      if (ndi == dataInt.length) {
        $("#stati").removeClass("text-color-gray");
        $("#stati").addClass("text-color-teal");
        $("#stati").text("Complete");
      }
    });
  }
});
