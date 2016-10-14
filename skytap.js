IFRAME_ROOT = "https://hr-staging.skytap-portal.com/self_learner_controls"

alert('Hi from another server');

function getParams() {
  prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? hashify(prmstr) : {};
}

function hashify(prmstr) {
  params = {};
  prmarr = prmstr.split("&");
  for (i=0; i<prmarr.length; i++) {
    tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }

  return params;
}

function getAttemptID() {
  return getParams()['cmiEntryId'];
}

function getLMSUsername() {
  return opener.SCORM_CallLMSGetValue("cmi.learner_id");
}

function getIframeURL() {
  return IFRAME_ROOT + '/' + getLMSUsername() + '/' + getAttemptID();
}

function setIframeURL() {
  ifr = document.getElementById('skytap');
  ifr.src = getIframeURL();
}

alert('Bye from another server');
