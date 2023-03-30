import * as admin from 'firebase-admin';

const firebaseAdminConfig = {

    "type": "service_account",
    "project_id": "hodinovysyn-97b57",
    "private_key_id": "35d65b97832ff12abe265a82650c1e48f4a76f4f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/iTEFowQg4o1/\n9G3VNV8j1fIuTyEVj9Pqt9c0MeBTx/H9ZMElWmLHGZaJ2XJLuROUJaRfcztt2aBN\n3vxgERbbIj9CIMIYq4w3Y2M5uI1UqzQZBR2TppfY6f7LhXk8xlFWPjzHtoreyD1g\n4jaf6Qn6Cz8Y8037JRQEd1gALY0cXRNfr4pgAeAq857r6vv3UDt4/bTN+2lYFeGs\nzG1xSHQ/9am74qtjGL7qx578WtbwZTNdN8zWP1fl1Ujrrv/m8Z4T1VzSKLP67pGn\nqjl9c9WOVMXrWiBb6VbU1ZRKL0SGk8tBNV35oAHLSlihX/bZn2MH2fuI8RkO/eHj\nJ5sfOMcVAgMBAAECggEABr+Jp54vtgzlWV2+ROXFfVi7WKBXFRBlMf7aKS+crLb9\nsqTLHUrK8iLXp/GuUjaqFu0glnBT5rHlMPkrQSM4/+179xN6Yy4gGY953n2/FP2X\nL0571UjoTq8n1/nS5K5EDVrR/2NSDzlU2EYAELBANrwQtAtWcwPCacneotr3/sjF\nBRC1xl8CIGQN0VpbX0qLFpjDbdudh+Q3ehs8JHHZb0CabzvG9GGZ4AauuYbPgks7\nTTYY2WODvogx49kq4GXCu2lb/53CLW6RwtDenPvyBubVhXHkcXf5HIMXWwKC+Ykt\nMXosXJfhTx1p4H+fFBf5Ee6EsNjssbfYHdF6IlvcQQKBgQD2wcpAEOf0iKa7Ls5Z\nugsh3MoFE9FUfKIrl1ZV65pnJISvmh/N4TqIYWynYkx5T+lUnsCMSjneZ2PO1ret\nl4GzttERockH6058VO8pFWYa1S9eVDiON7LE+Q+wRQ5aRn2IqSn0h9od1iyNXRfr\ndFAVxjAtTwKJCCr2foX2xd9gBQKBgQDGtd+nUgIHMk0WlUo7Y/kclpBfDjME1e+8\nCPcBt1nNkS59T041aPiuwvI44Z5+UnW0yS0StB29kDB1wM8bJR/2pp/pEj5vD6dE\nu6e5nG72KrFjH+ZEffjciAsWrTkWJlklJAiMD9j4lHfSX0dQuK2+zGhvDxFQ3r1t\n0HFOxnJH0QKBgDyWwO6SOCJXG3mCuLBXejxKVmCAyTmRkNBbTJu0SilhUiM8GOsY\njqLGKUPAYz62XHimsmjAIQ13HY7AMkGxnetezF8j9pS3NoJY6JCR7IxSJFtpGqnx\nCzhKX4vMqQWJoXFY+DBO20PQPwhG/4SU/sUZ8OJvMBQtqT71OjepxntxAoGAUfS1\nV/dU6s7uSIAua6xiFE5tISdkF3x9Mhqodca/fS+B8yEAarruxnWVHazAh+1Oqs/G\njU5IbeTId+icAuAe/MXgcmqZ4YidPpX/KWjBwzn8i5ueh2VFfP+HQ0USpHYQkmb4\nN3xZyrzBZrzxVvO0hVsdP6EBTU9w5ZfxA8KJY+ECgYA5NW61seRgtDXbdTtjOjan\nCG23y+k3pQR5jxn+Ff1dPOBhxmq5f7ifZ44EOizJcoAkxuDyz3oeU94S9W5Ezzh1\nHh/Wcztc5U5WClrTBCCFjh5YfUwAQ7ZRk+uS8FaznZ0IkoewxEUhpCdx0WOyPrLX\n8hxorAF2p0oGIWtqqXC6Dw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-94044@hodinovysyn-97b57.iam.gserviceaccount.com",
    "client_id": "116814075170580110134",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-94044%40hodinovysyn-97b57.iam.gserviceaccount.com"
}
if (admin.apps.length === 0) {
    // Initialize Firebase
    admin.initializeApp({
        credential: admin.credential.cert(firebaseAdminConfig),
    });
}
export const adminAuth = admin.auth;