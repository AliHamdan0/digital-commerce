"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var adminsAndUser = function (_a) {
    var user = _a.req.user;
    if (user.role === "admin")
        return true;
    return {
        id: {
            equals: user.id,
        },
    };
};
exports.Users = {
    slug: "users",
    auth: {
        verify: false,
    },
    // verify: {
    //   generateEmailHTML: ({ token }) => {
    //     return `<p>Virfiy your email..token</p>`;
    //     // return PrimaryActionEmailHtml({
    //     //   actionLabel: "verify your account",
    //     //   buttonText: "Verify Account",
    //     //   href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
    //     // });
    //   },
    // },
    // },
    access: {
        read: function () { return true; },
        create: function () { return true; },
        // read: adminsAndUser,
        // create: () => true,
        // update: ({ req }) => req.user.role === "admin",
        // delete: ({ req }) => req.user.role === "admin",
    },
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "admin";
        },
        defaultColumns: ["id"],
    },
    fields: [
        {
            name: "products",
            label: "Products",
            admin: {
                condition: function () { return false; },
            },
            type: "relationship",
            relationTo: "products",
            hasMany: true,
        },
        {
            name: "product_files",
            label: "Product files",
            admin: {
                condition: function () { return false; },
            },
            type: "relationship",
            relationTo: "product_files",
            hasMany: true,
        },
        {
            name: "role",
            defaultValue: "user",
            required: true,
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
        },
    ],
};
