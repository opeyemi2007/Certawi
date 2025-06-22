import React from "react";
import styles from "./pricing.module.scss";
import Table from "react-bootstrap/Table";
import Image from 'next/image'

function Feature () {
    return(
        <section className={styles.feature}>
            <article>
                <h3>Feature Comparison</h3>
            </article>
            
            <article className={styles.tableContainer}>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>Overview</th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Price (monthly billing)</td>
                            <td>$0/month</td>
                            <td>$23.99/month</td>
                            <td>$35.99/month</td>
                        </tr>
                        <tr>
                            <td>Price (annual billing)</td>
                            <td>$0/year</td>
                            <td>$239.99/year</td>
                            <td>$359.99/year</td>
                        </tr>
                        <tr>
                            <td>Monthly Active Users</td>
                            <td>12,784</td>
                            <td>5,941</td>
                            <td>2,891</td>
                        </tr>
                        <tr>
                            <td>Certificates per month</td>
                            <td>100</td>
                            <td>500</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Integrations</td>
                            <td>None</td>
                            <td>Basic</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Templates library</td>
                            <td>Generic</td>
                            <td>5</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Collaborative tools</td>
                            <td><Image src="/cancel.svg" width={25} height={25} alt="cancel" /></td>
                            <td><Image src="/cancel.svg" width={25} height={25} alt="cancel" /></td>
                            <td><Image src="/good.svg" width={25} height={25} alt="good" /></td>
                        </tr>
                        <tr>
                            <td>Dashboard interface</td>
                            <td><Image src="/cancel.svg" width={25} height={25} alt="cancel" /></td>
                            <td><Image src="/good.svg" width={25} height={25} alt="good" /></td>
                            <td><Image src="/good.svg" width={25} height={25} alt="good" /></td>
                        </tr>
                        <tr>
                            <td>Customer support</td>
                            <td>Regular</td>
                            <td>Regular</td>
                            <td>Priority</td>
                        </tr>
                        <tr>
                            <td>Dedicated assistant</td>
                            <td><Image src="/cancel.svg" width={25} height={25} alt="cancel" /></td>
                            <td><Image src="/cancel.svg" width={25} height={25} alt="cancel" /></td>
                            <td><Image src="/good.svg" width={25} height={25} alt="good" /></td>
                        </tr>
                        <tr>
                            <td>Mail delivery</td>
                            <td><Image src="/cancel.svg" width={25} height={25} alt="cancel" /></td>
                            <td><Image src="/good.svg" width={25} height={25} alt="good" /></td>
                            <td><Image src="/good.svg" width={25} height={25} alt="good" /></td>
                        </tr>
                        <tr>
                            <td>Add-on professional services</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Certificate download formats</td>
                            <td>zip</td>
                            <td>zip, png</td>
                            <td>zip, png, pdf</td>
                        </tr>
                    </tbody>

                </Table>
            </article>

            <article className={styles.featureEnd}>
                <h3>Trusted by 500+ high performing businesses and startups</h3>

                <div>
                    <Image src="/ebay.svg" width={25} height={25} alt="ebay" />
                    <Image src="/cnn.svg" width={25} height={25} alt="cnn" />
                    <Image src="/google.svg" width={25} height={25} alt="google" />
                    <Image src="/cisco.svg" width={25} height={25} alt="cisco" />
                    <Image src="/airbnb.svg" width={25} height={25} alt="airbnb" />
                    <Image src="/uber.svg" width={25} height={25} alt="uber" />
                </div>
            </article>

        </section>
    );

}

export default Feature;

