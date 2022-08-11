import { Actions } from "@twilio/flex-ui";

// Adding a listener
Actions.addListener('beforeStartOutboundCall', (payload) => {
    console.log(`beforeStartOutboundCall Listener Triggered`);

    console.log(`Match found, leveraging SIP target!`);

    // Match found, we will overwrite the payload destintation to leverage a SIP Enpoint/Interface target
    // REPLACE the @xxxx with your SIP Endpoint
    payload.destination = `sip:${payload.destination}@xxxx.sip.com`;

});
