/** @format */

import React from "react";
import "./kldivergence.css";
import Opener from "../../../Opener/Opener";
function Kldivergence() {
  return (
    <div className="kldivergence">
      <Opener />
      <h1 className="title">KL Divergence</h1>
      <div className="thoughts">
        <p>
          Eventually I will get around to adding latex in here somewhere but for
          now you're just going to have to do a quick read on kl divergence over
          on{" "}
          <a href="https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence">
            wikipedia
          </a>
          . I first came across this concept when reading about the standard
          loss function for variational autoencoders. To be honest, I had
          thought about the idea of a similarity score for probability
          distributions in my ap stats class, with the motivation being to
          extract some sort of p value to test whether distribution A(an
          empirically taken sample) was truly drawn from a base distribution B.
        </p>
        <h2 className="initdoubt">My Initial Thoughts</h2>
        <p>
          Reasonably, this looked a lot like the entropy equation that's
          commonly used to calculate cross entropy loss or to measure
          information gain in classical machine learning techniques such as
          decision trees. The main different component was the portion interior
          to the logarithm, or the quotient of the two probabilities for a given
          event. The question that I raised initially was one of cancellation:
          would it be possible for this logarithm to evaluate to z for a given
          event X, and -z for another event Y, and then for them to cancel out?
          I did some research and it appeared I had forgot to account for that
          leading coefficient of p(x), which means finding an example of
          cancellation wouldn't be trivial. Some guy on math stack exchange said
          that because of Gibb's and Pinsker's inequalities, KL divergence will
          indeed represent some sort of distance. I didn't really understnad
          those inequalities, so I sort of just went with it and laid my qualms
          to rest.
        </p>
        <h2 className="vaeapp">
          How they're used in VAEs(Variational Autoencoders)
        </h2>
        <p>
          The idea of a VAE is to encode an input into a latent space as a
          probability distribution rather than something like a matrix. The
          decoder takes samples from this distribution and the model is trained
          to reconstruct the initial input from the sampled point from the
          latent space probability distribution. KL divergence is used as a
          regularization term in the loss so that the latent space distributions
          are similar to N(0,1). My initial thought for why this may be desired
          is so that the distribution is centralized in a way, maybe it just
          goes crazy and has like a .5 probability at 2^15 and a .5 probability
          at -2^15. I obviously haven't done deep work with VAEs like a
          researcher would, but I wasn't able to find too many concrete reasons
          online for why making it close to N(0,1) would be useful. Maybe if I
          work with them deeply in the future I'll be able to see an advantage
          of it in practice. Overall, I think KL divergence and VAEs are quite
          interesting, to say the least.
        </p>
      </div>
    </div>
  );
}

export default Kldivergence;
