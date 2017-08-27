import React from 'react';
import Layout from '../../BasicLayout/Layout';
import Title from '../../common/Title';
import Header from '../../common/Header';

const styles = {
  definition: {
    fontFamily: 'Courier',
    border: '1px solid grey',
    padding: 24,
    color: '#fefefe',
    margin: 18,
  },
  section: {
    margin: 64,
    paddingTop: 24,
    paddingBottom: 24,
    borderBottom: '2px solid rgb(40,40,40)',
  }
}
const Basics = () => {
  return (
    <Layout padded>
      <div style={{position: 'absolute', width: '100%', height: '100%' }}>
        <Title>Tutorial 0: Thinking in Automate</Title>
        <div style={{
          overflow: 'auto',
          top: 130,
          position: 'absolute',
          bottom: 0,
          boxShadow: 'black 0px 4px 18px 1px inset',
          marginLeft: 64,
          marginRight: 64,
          padding: 18,
        }}>
          <div style={{fontSize: 22, margin: 28, marginTop: 32 }}>
            <Header>
              Automate is a system which is built on top of MQTT to allow users to easily prototype electronics quickly,
              and
              give electronics power.
              Most functionality and concepts are represented as MQTT topics, and the convention provides extra
              flexibility,
              extending the capabilities of MQTT.
            </Header>

            <div style={{padding: 24,  }}>
              <div style={styles.section}>
              In brief, MQTT is a publication-subscription protocol. Basically, this means we publish a value to a value
              to
              a topic. Other clients choose to subscribe to topics, and will be
              delivered the relevant messages. These topics may be multi-level paths, similar to what you see on a
              filesystem. If MQTT sounds scary to you, or if youre a pro as programming, in any case do not fret.
              MQTT, from a user point of view, is a method of communication based upon key-value pairs, which means it
              maps
              things like the key temperature to the value 34, or the key room/tv/state to on or off. It is an
              application level protocol.
              </div>

              <div style={styles.section}>
              For example, I may care about temperature data in room0, which I denote by room0/temperature. Clients will
              subscribe to room0/temperature, and when the an endpoint
              publishes to room0/temperature, the value will be delivered to all clients subscribed. Notice how the
              publisher of a topic does not need to have direct knowledge of
              the other endpoints accept the central broker to which to publish, or subscribe to data from. This is the
              mechanism of decoupling we use to take advantage and make our dumb endpoints smart.
              For more information and details on MQTT, see this link. For the most part, a naive understanding of
              publish
              subscribe mechanism is all you will need, and the bigggest task might
              be finding a client to use on your mqtt device. It is pretty common, but in case you may use HTTP POST/GET
              will polling as necessary instead.
              </div>

              <div style={styles.section}>
              In general, all features in the system are extensions of MQTT. For example, as you'll see later, to log an
              event which can be set up to send email alerts,
              we simply publish to events/(rest of event name here> with a value that will represent the message. This
              convention is used similarly through the system, and
              as an example, is also used to trigger sequences of events (which in themselves sequence mqtt topics to
              publish, in a time depedent order, which can be defined from the UI).

              </div>

              Let's start by defining some terms, which represent major features.  Each area has a special tutorial dedicated to hands
              on use of the feature.  The terms are simply defined to provide common basis for how to communicate about automate.
              <br />
              <br />
              <div style={styles.definition}>
                States - States are values corresponding to MQTT topics representing the system state. These are meant
                to
                provide the system information.
                For example, temperature might receive the state named states/temperature with value 76, or a light
                source
                might broadcast states/room0/light_status and states/room0/light_status.
              </div>
              <div style={styles.definition}>
                Actions - Actions are values corresponding to MQTT topics that are meant to trigger actions in the
                system.
                For example, a motor might respond to the action actions/door/door_motor, and upon receiving the topic
                will
                open the door if the value is on, else close the door.
              </div>
              <div style={styles.definition}>
                Conditions - Conditions are small scripts defined in javascript, that are used elsewhere in the system.
                They
                are scripts that return true or false. They may
                access state information, or other information external to automate via http, or other method.
              </div>
              <hr />
             Engines are simply terminology to refer to functionality the system can perform in the backgruond, rules, schedules, and sequencing, which are defined below.
              <br />
              <div style={styles.definition}>
                Rules - A Rule is a task which runs in the background at a given interval.  A rule is bound to a single condition, and will trigger based upon the edge type.
                When a rule is true, it is configured to send a message to a given mqtt topic.
              </div>
              <div style={styles.definition}>
                Sequences - Sequences are specific orders of mqtt topics to send, with specification of time. Sequences can be triggered by sending a message to the mqtt
                topic associated with the sequence.
              </div>
              <div style={styles.definition}>
                Schedules - Schedules are a background task that will trigger a mqtt message to be sent at a given time or occurence (daily, weekly, etc - cron specified)
              </div>
              <hr />
              Other terminology
              <br />
              <div style={styles.definition}>
                Events - Events are triggers by sending and mqtt topic to /event/(rest of event name) with a value that will be considered the message body.
                These can be used to log significant events of interest in the system, which can trigger email alerts and serve as a general history.
              </div>
              <div style={styles.definition}>
                ProtoProgrammer - Refers to specific hardware that can be used to easily read or output voltage from a circuit and translate it into an mqtt topic,
                no programming required.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Basics;
