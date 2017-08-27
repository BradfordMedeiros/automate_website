import React from 'react';
import Layout from '../../BasicLayout/Layout';
import Title from '../../common/Title';
import Header from '../../common/Header';

const styles = {
  definition: {
    fontSize: 18,
  }
}
const Basics = () => {
  return (
    <Layout padded>
      <div style={{ overflow: 'auto', position: 'absolute', width: '100%', height: '100%'}}>

      <Title>Tutorial 0: Thinking in Automate</Title>
      <div style={{ fontSize: 22, margin: 28 }}>
        <Header>
          Automate is a system which is built on top of MQTT to allow users to easily prototype electronics quickly, and
          give electronics power.
          Most functionality and concepts are represented as MQTT topics, and the convention provides extra flexibility,
          extending the capabilities of MQTT.
        </Header>

        <div style={{ padding: 24}}>
          <br /><br  />
          In brief, MQTT is a publication-subscription protocol. Basically, this means we publish a value to a value to
          a topic. Other clients choose to subscribe to topics, and will be
          delivered the relevant messages. These topics may be multi-level paths, similar to what you see on a
          filesystem. If MQTT sounds scary to you, or if youre a pro as programming, in any case do not fret.
          MQTT, from a user point of view, is a method of communication based upon key-value pairs, which means it maps
          things like the key temperature to the value 34, or the key room/tv/state to on or off. It is an
          application level protocol.

          <br /> <br />
          For example, I may care about temperature data in room0, which I denote by room0/temperature. Clients will
          subscribe to room0/temperature, and when the an endpoint
          publishes to room0/temperature, the value will be delivered to all clients subscribed. Notice how the
          publisher of a topic does not need to have direct knowledge of
          the other endpoints accept the central broker to which to publish, or subscribe to data from. This is the
          mechanism of decoupling we use to take advantage and make our dumb endpoints smart.
          For more information and details on MQTT, see this link. For the most part, a naive understanding of publish
          subscribe mechanism is all you will need, and the bigggest task might
          be finding a client to use on your mqtt device. It is pretty common, but in case you may use HTTP POST/GET
          will polling as necessary instead.

          <br /> <br />
          In general, all features in the system are extensions of MQTT. For example, as you'll see later, to log an
          event which can be set up to send email alerts,
          we simply publish to events/(rest of event name here> with a value that will represent the message. This
          convention is used similarly through the system, and
          as an example, is also used to trigger sequences of events (which in themselves sequence mqtt topics to
          publish, in a time depedent order, which can be defined from the UI).

          <br/><br />
          Let's start by defining some terms, which represent major features:
          <br />
          <br />
          <div>
            States - States are values corresponding to MQTT topics representing the system state. These are meant to
            provide the system information.
            For example, temperature might receive the state named states/temperature with value 76, or a light source
            might broadcast states/room0/light_status and states/room0/light_status.
          </div>
          <div>
            Actions - Actions are values corresponding to MQTT topics that are meant to trigger actions in the system.
            For example, a motor might respond to the action actions/door/door_motor, and upon receiving the topic will
            open the door if the value is on, else close the door.
          </div>
          <div>
            Conditions - Conditions are small scripts defined in javascript, that are used elsewhere in the system. They
            are scripts that return true or false. They may
            access state information, or other information external to automate via http, or other method.
          </div>
          <div>
            Conditions - Conditions are small scripts defined in javascript, that are used elsewhere in the system. They
            are scripts that return true or false. They may
            access state information, or other information external to automate via http, or other method.
          </div>
          <div>
            Conditions - Conditions are small scripts defined in javascript, that are used elsewhere in the system. They
            are scripts that return true or false. They may
            access state information, or other information external to automate via http, or other method.
          </div>
          <div>
            Conditions - Conditions are small scripts defined in javascript, that are used elsewhere in the system. They
            are scripts that return true or false. They may
            access state information, or other information external to automate via http, or other method.
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
};

export default Basics;
