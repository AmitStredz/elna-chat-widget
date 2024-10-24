export const idlFactory = ({ IDL }: any) => {
  return IDL.Service({
    add_hash: IDL.Func([IDL.Text], [IDL.Null], []),
    get_all_data: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};

// export const canisterId = "your_canister_id_here"; // Add your canister ID
