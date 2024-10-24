export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    add_hash: IDL.Func([IDL.Text], [IDL.Null], []),
    get_all_data: IDL.Func([], [IDL.Vec(IDL.Text)], ["query"]),
    get_date_data: IDL.Func([], [IDL.Text], ["query"]), // New function added here
  });
};

// export const canisterId = "your_canister_id_here"; // Add your canister ID
