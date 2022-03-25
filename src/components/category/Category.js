import React from "react";
import styles from "./category.module.css";
import ProductList from "../productList/ProductList";
const Category = () => {
  return (
    <div className={styles.categ}>
      <div className="container">
        <div className={styles.categInner}>
          <h2 className={styles.categInnerHeader}>
            What is excessive daytime sleepiness?
          </h2>
          <p className={styles.categInnerPara}>
            Hypersomnia or excessive daytime sleepiness or EDS is a condition
            where a person falls asleep frequently and unintentionally during
            the daytime. These sleep pangs visit a person when he/she is in the
            middle of some work such as having a meal or during an important
            meeting or a simple conversation.
          </p>
          <p className={styles.categInnerPara}>
            Though EDS is a not a disorder itself, it needs to be addressed
            attentively. It is your body’s way to communicate with you. It might
            be trying to tell you that you are not getting enough sleep or it
            might be fighting off some underlying sleep issues you are yet to
            address medically. You must look for the signs and symptoms and
            recognize them. This way, you can easily be able to find a solution
            to your EDS issue.
          </p>
          <p className={styles.categInnerPara}>
            Excessive daytime sleepiness can easily be confused with fatigue,
            since both the conditions indicate low energy levels. Also, these
            two conditions may be the byproduct of circumstances such as
            sleeplessness. The principle difference here is the fact that people
            dealing with fatigue often find it difficult to sleep despite being
            tired all day long. And on the other hand, people dealing with EDS
            often fall asleep regardless of their location and the kind of
            activity they are engaged into.
          </p>
        </div>
        <ProductList></ProductList>
        <div className={styles.categInner}>
          <h2 className={styles.categInnerHeader}>
            How to know if it’s hypersomnia
          </h2>
          <p className={styles.categInnerParaUl}>
            Excessive daytime sleepiness or EDS is fairly different than feeling
            tired all day long. If you have hypersomnia, you may relate to
            following conditions:
          </p>
          <ul>
            <li>Taking naps during the daytime and still feeling sluggish</li>
            <li>
              Fall asleep while engaged into activities such as eating or
              talking
            </li>
            <li>Taking long hours of night sleep</li>
          </ul>
          <h2 className={styles.categInnerHeader}>
            The definite signs of excessive daytime sleepiness
          </h2>
          <p className={styles.categInnerPara}>
            Though we have covered the signs of EDS in the above point, we need
            to look for some more signs which are seen in patients quite often.
            We all know that sleep plays a vital role in supporting major bodily
            functions. Lack of sleep disturb the healthy functioning of body
            causing health issues.
          </p>
          <p className={styles.categInnerPara}>
            You might be dealing with EDS despite not experiencing on a daily
            basis. Here’s how to know about it:
          </p>
          <p className={styles.categInnerParaUl}>
            Even if you don’t consciously feel sleepy, you may be suffering from
            excessive sleepiness if you’re experiencing any of the following:
          </p>
          <ul>
            <li>Memory issues</li>
            <li>Poor concentration</li>
            <li>Hampered alertness</li>
            <li>Irritability</li>
            <li>Difficulty understanding new concepts</li>
            <li>Indecisiveness</li>
            <li>Delayed reaction time</li>
            <li>Risk-taking behaviors</li>
          </ul>
          <p className={styles.categInnerPara}>
            If you have any of these symptoms, you need to see a doctor. These
            symptoms might occur due to excessive daytime sleepiness or there
            could be underlying sleep/health issues you need to get attended
            medically.
          </p>
          <h2 className={styles.categInnerHeader}>
            What causes excessive daytime sleepiness?
          </h2>
          <p className={styles.categInnerParaUl}>
            There are several reasons why a person experience EDS. some of the
            known causes are listed below:
          </p>
          <ul>
            <li>Lack of sleep</li>
            <li>Intermittent sleep</li>
            <li>Poor quality sleep</li>
            <li>Wake-sleep disorders</li>
            <li>Lifestyle habits </li>
            <li>Lack of exercise </li>
            <li>Health issues</li>
          </ul>
          <h2 className={styles.categInnerHeader}>
            Role of nootropic in treating excessive daytime sleepiness
          </h2>
          <p className={styles.categInnerPara}>
            Nootropics, also known as wakefulness enhancers, are a group of
            substances that boost brain performance. These are also called as
            smart drugs because of their ability to offer cognitive benefits.
            Generally, nootropics are classified into three categories: dietary
            supplements, synthetic compounds, and prescription drugs.{" "}
          </p>
          <p className={styles.categInnerPara}>
            Amongst these categories, prescription medicines are quite popular.
            Modafinil is a well-known prescription drug aka nootropic used by
            people to ward off sleepiness.
          </p>
          <span className={styles.categInnerLets}>
            Let’s know more about Modafinil.
          </span>
          <h2 className={styles.categInnerHeader}>What is Modafinil?</h2>
          <p className={styles.categInnerPara}>
            Modafinil, traded as Modalert, Modvigil etc., is a wakefulness
            promoter drug that help people to stay awake and alert for longer
            period of time. People often suffer from excessive daytime
            sleepiness or EDS due to sleep issues such as narcolepsy, insomnia,
            obstructive sleep apnea, or shift work sleep disorder.{" "}
          </p>
          <p className={styles.categInnerPara}>
            Modafinil also has a few off-label usages including cognitive
            improvement, demolishing fatigue in patients dealing with cancer or
            chronic fatigue syndrome, reducing symptoms of jet lag etc.
          </p>
          <h2 className={styles.categInnerHeader}>
            What is the hyper about Modafinil?
          </h2>
          <p className={styles.categInnerPara}>
            It has been on the list of popular and high-demand medicines since
            its inception. It is because of its ability to offer lasting
            alertness and also to improve cognitive skills a person already
            have.
          </p>
          <p className={styles.categInnerPara}>
            Though Modafinil 200mg pills are quite effective in managing
            excessive daytime sleepiness, it is not necessarily be true for
            every user. Some of the users get to experience these positive
            benefits quite extensively while some people do not experience it at
            all. The hyper about Modafinil is true to great extent. It is known
            to all that the nootropic medication works on the imbalance amongst
            brain neurotransmitters to keep them in the brain for longer. This
            is how the effects of alertness and cognitive enhancements are
            bestowed upon the user.
          </p>
          <h2 className={styles.categInnerHeader}>
            Can anyone take Modafinil?
          </h2>
          <p className={styles.categInnerPara}>
            Absolutely. People with no major health issues such as kidney or
            liver dysfunction can surely take Modafinil. Also, people with no
            history of alcohol or drug abuse can go for this miracle drug.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
