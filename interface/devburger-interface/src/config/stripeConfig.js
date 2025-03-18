import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51R3qQIAobKczl2ugknb9gKTdwQkwHotlEPurxOw1TzCKz3abmvhPua7tyFX7dPDrVZxJIbMAmf9pKfJ72o2sn5Wf00BsrzTsgd");

export default stripePromise;