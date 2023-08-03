import mixpanel from "mixpanel";

const mp = mixpanel.init(process.env.MIXPANEL_TOKEN??"");

export {mp};